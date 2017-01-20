# IAM-js

IAM-js is a Policy Based Access Control library, closely modeled on AWS IAM. Also inspired by [Landon](https://github.com/ory-am/ladon).

## Usage

`npm i iam-js`

## Examples

Protect your resources in our application called foo:
```
const iam = require('iam-js');
// iam.process(<resource>, <action>, <variables>)
if (iam.process('foo:bar-resource1', 'foo:deleteBar', {UserName: 'user1'}, (err, result) {
  // err in case some error appears
  // result true or false showing if the action is allowed or not on the resource
})
```

Create policies:
```
// allow someone to delete all foo:bar resources
Iam([{
  effect: 'Allow',
  actions: ['foo:deleteBar'],
  resources: ['foo:bar-*']
}], function callback..)
```

Policies are attached to Users & Teams, that is outside the scope of this library - there are no users & teams here, just policies. Also additional functionality, like listing what actions a user can perform on a resource are also out of scope here.

## Why Policy Based Access Control (PBAC)

Great summary of the history of various access control mechanisms: http://csrc.nist.gov/news_events/privilege-management-workshop/PvM-Model-Survey-Aug26-2009.pdf and note that Risk-Adaptive Access Control is a stretch goal ;-)

## AWS IAM

This effort is heavily based on AWS IAM: http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html. Note in IAM terms we are not doing resource based policies or inline policies, just managed policies for now.

We are also not doing roles (for now at least); teams (or groups in IAM terminology) should be sufficient for the initial version.

The following module seems to satisfy our requirements here so far: https://www.npmjs.com/package/pbac, and so far this library is a small wrapper around this module. Whether we use that module directly or continue to wrap it is up for debate.

## Misc additional links

http://docs.aws.amazon.com/IAM/latest/UserGuide/access.html
http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_examples.html
