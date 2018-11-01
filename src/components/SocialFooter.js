import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const SocialFooter = () => (
  <div>
    <Button
      size='mini'
      color='facebook'
      target='_blank'
      href='https://www.facebook.com/SoundsGroovyOBX'
    >
      <Icon name='facebook' />
      Facebook
    </Button>
    <Button
      size='mini'
      color='instagram'
      target='_blank'
      href='https://www.instagram.com/soundsgroovyobx/'
    >
      <Icon name='instagram' />
      Instagram
    </Button>
    <Button
      size='mini'
      color='youtube'
      target='_blank'
      href='https://www.youtube.com/channel/UCHGzvOv0rrEXyrlVb-3RtjQ?view_as=subscriber'
    >
      <Icon name='youtube' />
      YouTube
    </Button>
  </div>
);

export default SocialFooter;