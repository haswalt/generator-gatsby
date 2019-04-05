import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Hamburger from './index';

const DESCRIPTION = `Hamburger menu icon that transforms based on state`;

storiesOf('Hamburger', module)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => <Hamburger active={boolean('Active', false)} />);
