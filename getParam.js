const AWS = require('aws-sdk');
const _   = require('lodash');

AWS.config.update({ region: 'us-west-2' });

const ssm       = new AWS.SSM();
const args      = process.argv.slice(2);

const getParam = (name) => new Promise((resolve, reject) => {

    const opts = {
      Name: `${name}`,
      WithDecryption: true
    };

    ssm.getParameter(opts).promise()
    .then(data => resolve(data))
    .catch(err => reject(err));

});

getParam(args[0])
.then(res => console.log(res));
