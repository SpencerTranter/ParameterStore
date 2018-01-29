const AWS = require('aws-sdk');
const _   = require('lodash');

AWS.config.update({ region: 'us-west-2' });

const ssm       = new AWS.SSM();
const args      = process.argv.slice(2);

const getParams = (token, opts) => new Promise((resolve, reject) => {

    if (token) opts.NextToken = token;

    ssm.getParametersByPath(opts).promise()
    .then(data => resolve(data))
    .catch(err => reject(err));

});

// Recursive retrieval of parameters, max batch number is 10
getMoreParams = (path, params=[], token) => {

  const opts = {
    Path: `${path}`,
    Recursive: true,
    WithDecryption: true
  };

  console.log('getMoreParams token:', token !== undefined);
  return getParams(token, opts).then((data) => {

    console.log(data)
    params.push(data.Parameters);
    return (data.NextToken) ? getMoreParams(path, params, data.NextToken) : _.flatten(params)

  });

};

getMoreParams(args[0])
.then(res => console.log(res));
