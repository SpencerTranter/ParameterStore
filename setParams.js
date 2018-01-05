const _          = require('lodash');
const parameters = require('./parameters.json');
const AWS        = require('aws-sdk');

AWS.config.update({ region: 'us-west-2' });

const ssm       = new AWS.SSM();

const Type      = 'SecureString';
const Overwrite = true;

_.forEach(parameters, (params, KeyId) => {

  _.forEach(params, (Value, name) => {

    const Name = `/NAME/${name}`;
    const opts = { KeyId, Name, Overwrite, Type, Value };

    ssm.putParameter(opts, (err, data) => {

      if (err) console.log(err, err.stack);
      else     console.log('SUCCESS', data);

    });

  })

});
