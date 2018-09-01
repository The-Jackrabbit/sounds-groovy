import _ from 'lodash';
import React, { Component } from 'react';
import { Grid, Header, Image, Rail, Segment, Sticky } from 'semantic-ui-react';

const Placeholder = () => <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />

export default class StickyExampleOffset extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state

    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <div ref={this.handleContextRef}>
            <Segment>

              <Rail position='right'>
                <Sticky bottomOffset={50} context={contextRef} offset={50} pushing>
                  <Header as='h3'>Stuck Content</Header>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Sticky>
              </Rail>
            </Segment>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}