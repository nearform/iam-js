const Lab = require('lab')
const assert = require('power-assert')
const lab = exports.lab = Lab.script()
const {describe, it, before} = lab
const Code = require('code')
const {expect} = Code
const sinon = require('sinon')
const Iam = require('../lib/index.js')

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
	let iam

	lab.before((done) => {
		Iam(policies, (i) => {
			expect(i).to.exist()

			iam = i

			done()
		})
	})

	it('should allow', done => {
		iam.process('resources/bob/something', 'foo:bar:list', {UserName: 'bob'}, (err, result) => {
			expect(err).to.not.exist()
			expect(result).to.be.true()

			done()
		})
	})

	it('should not allow', done => {
		iam.process('resources/fred/anotherthing', 'foo:bar:list', (err, result) => {
			expect(err).to.not.exist()
			expect(result).to.be.false()

			done()
		})
	})
})
