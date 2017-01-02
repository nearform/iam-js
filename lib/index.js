'use strict'

const PBAC = require('pbac')
const _ = require('lodash')

module.exports = function (policies, done) {
  const pbac = new PBAC(policies, {validateSchema: false, validatePolicies: false})

  function process (resource, action, opts, done) {
    if (!done) {
      done = opts
      opts = null
    }
    var params = {
      action: action,
      resource: resource
    }
    if (opts) {
      params = Object.assign(params, {
        variables: {
          req: opts
        }
      })
    }
    var result = pbac.evaluate(params)

    return done(null, result)
  }

  function actions (resource, done) {
    try {
      const result = _(policies)
        .map('Statement')
        .flatten()
        .filter({Effect: 'Allow'})
        .map((statement) => {
          let actions = []
          statement.Resource.forEach((r) => {
            if (pbac.conditions.StringLike(r, resource)) {
              statement.Action.forEach((action) => {
                process(resource, action, (err, access) => {
                  if (err) return
                  if (access) actions.push(action)
                })
              })
            }
          })

          return actions.length > 0 ? actions : null
        })
        .filter()
        .flatten()
        .uniq()
        .value()

      return done(null, result)
    } catch (e) {
      return done(e)
    }
  }

  done({
    process: process,
    actions: actions
  })
}
