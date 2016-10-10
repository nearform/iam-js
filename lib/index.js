const PBAC = require('pbac')

function createPolicies(policies, done) {
	return done()
}

function process(policies, resource, action, done) {
	var pbac = new PBAC(policies);
	var result = pbac.evaluate({
		action: action,
		resource: resource
	});
	
	return done(null, result)
}

module.exports = {
	createPolicies: createPolicies,
	process: process
}