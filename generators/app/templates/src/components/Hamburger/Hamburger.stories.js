import React from 'react';
import { storiesOf } from '@storybook/react';
import Hamburger from './index';
import { boolean } from '@storybook/addon-knobs';

const DESCRIPTION = `Animated hamburger menu icon`,
  DEFAULTS = {
    open: false
  };

storiesOf('Hamburger', module)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => <Hamburger open={boolean('Open', DEFAULTS.open)} />);
