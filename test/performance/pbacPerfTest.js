'use strict'

const generatePolicies = require('./generatePolicies')
var PBAC = require('pbac');

let policies = generatePolicies(10)
console.time("pbac 10");
var pbac = new PBAC(policies, {validateSchema: false, validatePolicies: false})
var res = pbac.evaluate({
  action: 'foo:bar:clone',
  resource: 'resources/notthere/test'
})
console.timeEnd("pbac 10");
console.time("pbac 10 again");
var pbac = new PBAC(policies, {validateSchema: false, validatePolicies: false})
var res = pbac.evaluate({
  action: 'foo:bar:clone',
  resource: 'resources/notthere/test'
})
console.timeEnd("pbac 10 again");

policies = generatePolicies(100)
console.time("pbac 100");
var pbac = new PBAC(policies, {validateSchema: false, validatePolicies: false})
var res = pbac.evaluate({
  action: 'foo:bar:clone',
  resource: 'resources/notthere/test'
})
console.timeEnd("pbac 100");
console.time("pbac 100 again");
var pbac = new PBAC(policies, {validateSchema: false, validatePolicies: false})
var res = pbac.evaluate({
  action: 'foo:bar:clone',
  resource: 'resources/notthere/test'
})
console.timeEnd("pbac 100 again");

policies = generatePolicies(1000)
console.time("pbac 1000");
var pbac = new PBAC(policies, {validateSchema: false, validatePolicies: false})
var res = pbac.evaluate({
  action: 'foo:bar:clone',
  resource: 'resources/notthere/test'
})
console.timeEnd("pbac 1000");
console.time("pbac 1000 again");
var pbac = new PBAC(policies, {validateSchema: false, validatePolicies: false})
var res = pbac.evaluate({
  action: 'foo:bar:clone',
  resource: 'resources/notthere/test'
})
console.timeEnd("pbac 1000 again");

policies = generatePolicies(10000)
console.time("pbac 10000");
var pbac = new PBAC(policies, {validateSchema: false, validatePolicies: false})
var res = pbac.evaluate({
  action: 'foo:bar:clone',
  resource: 'resources/notthere/test'
})
console.timeEnd("pbac 10000");
console.time("pbac 10000 again");
var pbac = new PBAC(policies, {validateSchema: false, validatePolicies: false})
var res = pbac.evaluate({
  action: 'foo:bar:clone',
  resource: 'resources/notthere/test'
})
console.timeEnd("pbac 10000 again");

policies = generatePolicies(100000)
console.time("pbac 100000");
var pbac = new PBAC(policies, {validateSchema: false, validatePolicies: false})
var res = pbac.evaluate({
  action: 'foo:bar:clone',
  resource: 'resources/notthere/test'
})
console.timeEnd("pbac 100000");
console.time("pbac 100000 again");
var pbac = new PBAC(policies, {validateSchema: false, validatePolicies: false})
var res = pbac.evaluate({
  action: 'foo:bar:clone',
  resource: 'resources/notthere/test'
})
console.timeEnd("pbac 100000 again");
