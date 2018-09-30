import React, { Component } from 'react';
import TopIntro from '../../components/TopIntro';
import {intro} from '../contact-us/Data';
import {Grid, Form} from 'semantic-ui-react';

// Load the AWS SDK for Node.js
let AWS = require('aws-sdk');
// let credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
// AWS.config.credentials = credentials;

// AWS.config.update({region: 'us-east-1'});


// AWS.config.update({
//   region: 'us-east-1',
//   credentials: new AWS.SharedIniFileCredentials()
// });

// const ContactUs = () => {

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

class ContactUs extends Component {

  // Create sendEmail params
  params = {
    Destination: { /* required */
      ToAddresses: [
        'SoundsGroovyOBX@gmail.com',
      ]
    },
    Message: { /* required */
      Body: { /* required */
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

  state = {};
  handleChange = (e, {name, value, inquiry}) => this.setState({[name]: value});
  handleSubmit = () => {
    this.params.Message.Body.Text.Data = this.state.inquiry + '\n' + this.state.name;
    this.params.ReplyToAddresses[0] = this.state.email;


// Create the promise and SES service object
  let sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(this.params).promise();

  // Handle promise's fulfilled/rejected states
  sendPromise.then(
    function(data) {
      console.log(data.MessageId);
    }).catch(
    function(err) {
      console.error(err, err.stack);
    });

  };

  render() {
    const {name, email} = this.state;
    return (
      <Grid
        centered={true}
        style={{
          marginBottom: '115px'
        }}
      >

        {/*  Intro section of the page  */}
        <Grid.Row>
          <TopIntro
            {...intro}
          />
        </Grid.Row>

        {/*  Start of the Contact Us body  */}
        <Grid.Row>

          <Grid.Column
            width={9}
          >
            <Form
              onSubmit={this.handleSubmit}
            >
              <Form.Group>
                <Form.Input
                  placeholder='Name'
                  name='name'
                  value={name}
                  onChange={this.handleChange}
                  width={11}
                />
                <Form.Input
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                  width={11}
                />
                <Form.Button content='Submit'/>
              </Form.Group>
              <Form.TextArea
                placeholder='Tell us more ...'
              />
            </Form>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  };
};
export default ContactUs;
