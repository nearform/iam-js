const Lab = require('lab')
const lab = exports.lab = Lab.script()
const {describe, it, before} = lab
const Code = require('code')
const {expect} = Code
const Iam = require('../lib/index.js')

describe('Basic access tests', () => {
  let policies = [{
    Version: '2106-10-17',
    Statement: [{
      Effect: 'Allow',
      Action: ['foo:bar:clone',
        'foo:bar:delete',
        'foo:bar:list',
        'foo:bar:read',
        'foo:bar:publish'],
      Resource: ['resources/thing1/*']
    }]
  }]
  let iam

  before((done) => {
    Iam(policies, (i) => {
      expect(i).to.exist()

      iam = i

      done()
    })
  })

  it('should allow', done => {
    iam.process('resources/thing1/something', 'foo:bar:list', (err, result) => {
      expect(err).to.not.exist()
      expect(result).to.be.true()

      done()
    })
  })

  it('should not allow', done => {
    iam.process('resources/thing2', 'foo:bar:list', (err, result) => {
      expect(err).to.not.exist()
      expect(result).to.be.false()

      done()
    })
  })
})
