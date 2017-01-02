'use strict';

function generatePolicies(length, effect) {
  const arr = []
  for (let i=0; i < length; i++) {
    arr.push({
      Version: '2106-10-17',
      Statement: [{
        Effect: effect || 'Allow',
        Action: [
          'foo:bar:clone',
          'foo:bar:delete',
          'foo:bar:list',
          'foo:bar:read',
          'foo:bar:publish'],
        Resource: [
          `resources/thing${i}/*`,
          `resources/thing${i+1}/*`,
          `resources/thing${i+2}/*`,
          `resources/thing${i+3}/*`,
          `resources/thing${i+4}/*`,
          `resources/thing${i+5}/*`,
          `resources/thing${i+6}/*`,
          `resources/thing${i+7}/*`,
          `resources/thing${i+8}/*`,
        ]
      }]
    })
  }

  return arr
}

module.exports = generatePolicies
