const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-west-2' });

const ssm = new AWS.SSM();

var opts = {
  Path: '/NAME'
  Recursive: true,
  WithDecryption: true
}

ssm.getParametersByPath(opts, function(err, data) {

  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response

});
