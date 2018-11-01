import React, { Component } from 'react';
import axios from 'axios';
import TopIntro from '../../components/TopIntro';
import {intro} from '../contact-us/Data';
import {Grid, Form} from 'semantic-ui-react';


axios.defaults.baseURL = process.env.REACT_APP_CONTACT_US_BY_MAIL;

class ContactUs extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  };

  handleChange = (e, { name, value }) =>
    this.setState({ [name]:   value });

  handleSubmit = event => {
    event.preventDefault();
    let error = false;

    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    axios.post({data})
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    // const {name, email, message} = this.state;
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
                  value={this.state.name}
                  onChange={this.handleChange}
                  width={11}
                />
                <Form.Input
                  placeholder='Email'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleChange}
                  width={11}
                />
              </Form.Group>
              <Form.TextArea
                onChange={this.handleChange}
                name='message'
                value={this.state.message}
                placeholder='Tell us more ...'
              />
              <Form.Button
                content='Submit'
                floated='right'
                disabled={
                  !this.state.name
                  || !this.state.email
                  || !this.state.message
                }
              />
            </Form>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  };
};
export default ContactUs;
