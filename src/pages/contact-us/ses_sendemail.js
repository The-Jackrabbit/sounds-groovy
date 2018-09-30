// Load the AWS SDK for Node.js
let AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

// Create sendEmail params
let params = {
  Destination: { /* required */
    ToAddresses: [
      'SoundsGroovyOBX@gmail.com',
    ]
  },
  Message: { /* required */
    Body: { /* required */
      Html: {
        Charset: "UTF-8",
        Data: "HTML_FORMAT_BODY"
      },
      Text: {
        Charset: "UTF-8",
        Data: "TEXT_FORMAT_BODY"
      }
    },
    Subject: {
      Charset: 'UTF-8',
      Data: 'SGOBX Contact Us'
    }
  },
  Source: 'SENDER_EMAIL_ADDRESS', /* required */
  ReplyToAddresses: [
    'SoundsGroovyOBX@gmail.com',
  ],
};

// Create the promise and SES service object
let sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
  function(data) {
    console.log(data.MessageId);
  }).catch(
  function(err) {
    console.error(err, err.stack);
  });