const _             = require('lodash');
const parameters    = require('./parameters.json');
const AWS           = require('aws-sdk');
const batchPromises = require('batch-promises');

AWS.config.update({ region: 'us-west-2' });

const ssm       = new AWS.SSM();

const Type      = 'SecureString';
const Overwrite = true;
const Opts      = [];

_.forEach(parameters, (params, KeyId) => {

  _.forEach(params, (Value, name) => {

    if (typeof Value === 'object') Value = JSON.stringify(Value);
    const Name = `${name}`;
    console.log(Name);
    Opts.push({ KeyId, Name, Overwrite, Type, Value });

  })

});

// Batch processing for envrionment variables into AWS. Throttling rate will error without this.
batchPromises(5, Opts, i => new Promise((resolve, reject) => {

  setTimeout(() => {
    ssm.putParameter(i).promise()
    .then(res => resolve(res))
  }, 2000);
}))
.then(results => {
  console.log(results);
});
