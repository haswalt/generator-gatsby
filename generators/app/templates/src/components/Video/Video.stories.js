import React from 'react';
import { storiesOf } from '@storybook/react';
import Video from './index';
import { text, boolean } from '@storybook/addon-knobs';

const DESCRIPTION = `Adaptive video component that can render players for streaming services or local videos`,
  DEFAULTS = {
    src: 'https://vimeo.com/channels/staffpicks/55073825',
    background: false,
    placeholder: ''
  };

storiesOf('Video', module)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => (
    <Video
      src={text('Source', DEFAULTS.src)}
      background={boolean('Background video', DEFAULTS.background)}
      placeholder={text('Placeholder image', DEFAULTS.placeholder)}
    />
  ));
