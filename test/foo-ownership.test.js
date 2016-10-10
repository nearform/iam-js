const Lab = require('lab')
const assert = require('power-assert')
const lab = exports.lab = Lab.script()
const {describe, it, before} = lab
const sinon = require('sinon')
const iam = require('../lib/index.js')

describe('Ownership', () => {
	var policies = [{
		Version: '2106-10-17',
		Statement: [{
			Effect: 'Allow',
			Action: ['foo:bar:clone',
				'foo:bar:delete',
				'foo:bar:list',
				'foo:bar:read',
				'foo:bar:publish'],
			Resource: ['resources/${req:UserName}/*']
		}]
	}]

	// TODO
	/* 
	lab.before((done) => {
		iam.createPolicies(policies, done)
	}) */

	it('should allow', done => {
		iam.process(policies, 'resources/bob/something', 'foo:bar:list', {UserName: 'bob'}, (err, result) => {
			assert.ok(!err)
			assert.equal(result, true)
			done()
		})
	})

	it('should not allow', done => {
		iam.process(policies, 'resources/fred/anotherthing', 'foo:bar:list', (err, result) => {
			assert.ok(!err)
			assert.equal(result, false)
			done()
		})
	})

})
