'use strict'

const generatePolicies = require('./generatePolicies')
const Iam = require('../../lib/index.js')
var PBAC = require('pbac');

let policies = generatePolicies(10, 'Deny')

console.time("iam-js 'Deny' 10");
Iam(policies, (iam) => {
  iam.process('resources/thing1/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 'Deny' 10");
  })
})
console.time("iam-js 'Deny' 10 again");
Iam(policies, (iam) => {
  iam.process('resources/thing1/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 'Deny' 10 again");
  })
})

policies = generatePolicies(100, 'Deny')
console.time("iam-js 'Deny' 100");
Iam(policies, (iam) => {
  iam.process('resources/thing80/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 'Deny' 100");
  })
})
console.time("iam-js 'Deny' 100 again");
Iam(policies, (iam) => {
  iam.process('resources/thing80/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 'Deny' 100 again");
  })
})

policies = generatePolicies(1000, 'Deny')
console.time("iam-js 'Deny' 1000");
Iam(policies, (iam) => {
  iam.process('resources/thing800/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 'Deny' 1000");
  })
})
console.time("iam-js 'Deny' 1000 again");
Iam(policies, (iam) => {
  iam.process('resources/thing800/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 'Deny' 1000 again");
  })
})

policies = generatePolicies(10000, 'Deny')
console.time("iam-js 'Deny' 10000");
Iam(policies, (iam) => {
  iam.process('resources/thing8000/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 'Deny' 10000");
  })
})
console.time("iam-js 'Deny' 10000 again");
Iam(policies, (iam) => {
  iam.process('resources/thing8000/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 'Deny' 10000 again");
  })
})

policies = generatePolicies(100000, 'Deny')
console.time("iam-js 'Deny' 100000");
Iam(policies, (iam) => {
  iam.process('resources/thing80000/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 'Deny' 100000");
  })
})
console.time("iam-js 'Deny' 100000 again");
Iam(policies, (iam) => {
  iam.process('resources/thing80000/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 'Deny' 100000 again");
  })
})
