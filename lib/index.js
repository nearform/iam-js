'use strict'

const PBAC = require('pbac')

module.exports = function (policies, done) {
	const pbac = new PBAC(policies)

	function process(resource, action, opts, done) {
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

	done({
		process: process
	})
}
