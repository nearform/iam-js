const Lab = require('lab')
const lab = exports.lab = Lab.script()
const {describe, it, before} = lab
const Code = require('code')
const {expect} = Code
const Iam = require('../lib/index.js')

describe('actions function', () => {

  let policies = [
    {
      Version: '2106-10-17',
      Statement: [
        {
          Effect: 'Allow',
          Action: ['foo:bar:clone',
            'foo:bar:delete',
            'foo:bar:list',
            'foo:bar:read',
            'foo:bar:publish'],
          Resource: ['resources/thing1/*']
        },
        {
          Effect: 'Deny',
          Action: ['foo:bar:*'],
          Resource: ['resources/nothing/*']
        }
      ]
    },
    {
      Version: '2106-10-17',
      Statement: [
        {
          Effect: 'Allow',
          Action: ['foo:bar:read'],
          Resource: ['resources/nothing/no-read']
        },
        {
          Effect: 'Allow',
          Action: ['foo:baz:clone',
            'foo:baz:delete',
            'foo:baz:list',
            'foo:baz:read',
            'foo:baz:publish'],
          Resource: ['resources/multi/*']
        }
      ]
    },
    {
      Version: '2106-10-17',
      Statement: [{
        Effect: 'Allow',
        Action: ['foo:bar:clone',
          'foo:bar:delete',
          'foo:bar:list',
          'foo:bar:read',
          'foo:bar:publish'],
        Resource: ['resources/multi/*']
      }]
    }
  ]
  let iam

  before((done) => {
    Iam(policies, (i) => {
      expect(i).to.exist()

      iam = i

      done()
    })
  })

  it('should list actions', done => {
    iam.actions('resources/thing1/something', (err, result) => {
      expect(err).to.not.exist()
      expect(result).to.equal([
        'foo:bar:clone',
        'foo:bar:delete',
        'foo:bar:list',
        'foo:bar:read',
        'foo:bar:publish'
      ])

      done()
    })
  })

  it('should list actions that could be ok for mutiple resources', done => {
    iam.actions('resources/multi/something', (err, result) => {
      expect(err).to.not.exist()
      expect(result).to.equal([
        'foo:baz:clone',
        'foo:baz:delete',
        'foo:baz:list',
        'foo:baz:read',
        'foo:baz:publish',
        'foo:bar:clone',
        'foo:bar:delete',
        'foo:bar:list',
        'foo:bar:read',
        'foo:bar:publish'
      ])

      done()
    })
  })

  it('should not list denied actions', done => {
    iam.actions('resources/nothing/no-read', (err, result) => {
      expect(err).to.not.exist()
      expect(result).to.equal([])

      done()
    })
  })
})
