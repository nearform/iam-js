const Lab = require('lab')
const assert = require('power-assert')
const lab = exports.lab = Lab.script()
const {describe, it, before} = lab
const sinon = require('sinon')
const iam = require('../lib/index.js')

describe('Basic access tests', () => {
	var policies = [{
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

	// TODO
	/* 
	lab.before((done) => {
		iam.createPolicies(policies, done)
	}) */

	it('should allow', done => {
		iam.process(policies, 'resources/thing1/something', 'foo:bar:list', (err, result) => {
			assert.ok(!err)
			assert.equal(result, true)
			done()
		})
	})

	it('should not allow', done => {
		iam.process(policies, 'resources/thing2', 'foo:bar:list', (err, result) => {
			assert.ok(!err)
			assert.equal(result, false)
			done()
		})
	})

})
