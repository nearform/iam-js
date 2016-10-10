const PBAC = require('pbac')

function createPolicies(policies, done) {
	return done()
}

function process(policies, resource, action, opts, done) {
	if (!done) {
		done = opts
		opts = null
	}
	var pbac = new PBAC(policies);
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

module.exports = {
	createPolicies: createPolicies,
	process: process
}