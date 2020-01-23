import { select, text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from './index';

const DESCRIPTION = `Adaptive button with sizes and themes`,
  DEFAULT_PROPS = {
    text: 'Click me',
    size: 'default',
    theme: 'default',
    busy: false
  },
  THEME_OPTIONS = {
    Default: 'default'
  },
  SIZE_OPTIONS = {
    Default: 'default'
  };

storiesOf('Button', module)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => (
    <Button
      href={text('URL', '')}
      theme={select('Theme', THEME_OPTIONS, DEFAULT_PROPS.theme)}
      size={select('Size', SIZE_OPTIONS, DEFAULT_PROPS.size)}
      busy={boolean('Busy', DEFAULT_PROPS.busy)}
    >
      {text('Label', DEFAULT_PROPS.text)}
    </Button>
  ));
