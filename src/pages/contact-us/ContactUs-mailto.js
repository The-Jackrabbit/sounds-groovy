import React, { Component } from 'react';
import TopIntro from '../../components/TopIntro';
import {intro} from '../contact-us/Data';
import {Divider, Grid, Form} from 'semantic-ui-react';
import ReCAPTCHA from 'react-google-recaptcha';

function onChange(value) {
  console.log('Captcha value: ', value);
}

const recaptchaRef = React.createRef();

class ContactUs extends Component {
  state = {};

  render() {
    const {name, email, comment, topic} = this.state;
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
              method="post"
              action="mailto:SoundsGroovyOBX@gmail.com?Subject=SGOBX Inquiry"
              enctype="text/plain"
            >
              <Form.Input
                placeholder='Sounds Groovy OBX Inquiry'
                name='Topic'
                value={topic}
              />
              <Form.TextArea
                name='Comment'
                value={comment}
                placeholder='Tell us more ...'
              />
              <Form.Group>
                <Form.Input
                  placeholder='Name'
                  name='Name'
                  value={name}
                  width={11}
                />
                <Form.Input
                  placeholder='Email'
                  name='Email'
                  value={email}
                  width={11}
                />
              </Form.Group>

              <Form.Group>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey='6LdLtHIUAAAAAMN18fk67yj2A1gtD4KWxYUjgpX7'
                  onChange={onChange}
                />
                <Form.Input type="submit" value="Submit"
                />
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  };
};
export default ContactUs;
