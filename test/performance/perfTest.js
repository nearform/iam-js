'use strict'

const generatePolicies = require('./generatePolicies')
const Iam = require('../../lib/index.js')

let policies = generatePolicies(10)
console.time("iam-js 10");
Iam(policies, (iam) => {
  iam.process('resources/notthere/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 10");
  })
})
console.time("iam-js 10 again");
Iam(policies, (iam) => {
  iam.process('resources/notthere/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 10 again");
  })
})

policies = generatePolicies(100)
console.time("iam-js 100");
Iam(policies, (iam) => {
  iam.process('resources/notthere/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 100");
  })
})
console.time("iam-js 100 again");
Iam(policies, (iam) => {
  iam.process('resources/notthere/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 100 again");
  })
})

policies = generatePolicies(1000)
console.time("iam-js 1000");
Iam(policies, (iam) => {
  iam.process('resources/notthere/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 1000");
  })
})
console.time("iam-js 1000 again");
Iam(policies, (iam) => {
  iam.process('resources/notthere/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 1000 again");
  })
})

policies = generatePolicies(10000)
console.time("iam-js 10000");
Iam(policies, (iam) => {
  iam.process('resources/notthere/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 10000");
  })
})
console.time("iam-js 10000 again");
Iam(policies, (iam) => {
  iam.process('resources/notthere/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 10000 again");
  })
})

policies = generatePolicies(100000)
console.time("iam-js 100000");
Iam(policies, (iam) => {
  iam.process('resources/notthere/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 100000");
  })
})
console.time("iam-js 100000 again");
Iam(policies, (iam) => {
  iam.process('resources/notthere/test', 'foo:bar:clone', (err, result) => {
    console.timeEnd("iam-js 100000 again");
  })
})
