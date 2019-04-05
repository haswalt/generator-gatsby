import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from './index';

const DESCRIPTION = `Button with various themes`,
  DEFAULT_PROPS = {
    text: 'Click me',
    href: '',
    theme: 'primary'
  },
  THEME_OPTIONS = {
    Primary: 'primary',
    Secondary: 'secondary'
  };

storiesOf('Button', module)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Primary', () => (
    <Button
      href={text('Href', DEFAULT_PROPS.href)}
      theme={select('Theme', THEME_OPTIONS, DEFAULT_PROPS.theme)}
    >
      {text('Label', DEFAULT_PROPS.text)}
    </Button>
  ));
