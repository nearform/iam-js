# IAM-js

IAM-js is a Policy Based Access Control library, closed modeled on AWS IAM. Also inspired by [Landon](https://github.com/ory-am/ladon)

## Usage

`npm i iam-js`

## Examples

Protect your resources in our application called foo:
```
const iam = require('iam-js');
if (iam.process('user1', 'foo:bar-resource1', 'foo:deleteBar') {
  // it's allowed
  ...	
} else {
  // raise an error
}
```

List what actions a user can perform on a resource:
```
iam.actions('user1', 'foo:bar-resource1', function (err, actions)) {
  ...
  // actions: ['foo:deleteBar']
}
```

Create policies:
```
// allow someone to delete all foo:bar resources 
iam.createPolicies([{
  effect: 'Allow',
  actions: ['foo:deleteBar'],
  resources: ['foo:bar-*']
}], function callabck..)
```

Policies are attached to Users & Teams. 

## Technical Overview

TODO PBAC vs RBAC, etc

## AWS IAM

This project is heavily based on AWS IAM, in whicl a policy is a document that formally states one or more permissions: http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html. Note in IAM terms we are not doing resource based policies, or inline policies, just 'managed policies'.

We are also not doing roles (for now at least), teams (or groups in IAM terminology) should be sufficuent for the initial version. 


