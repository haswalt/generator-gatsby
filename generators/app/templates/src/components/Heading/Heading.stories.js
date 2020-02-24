import { storiesOf } from '@storybook/react';
import React from 'react';
import Heading from './index';

const DESCRIPTION = `Consistent heading`,
  DEFAULTS = {
    heading: 'Fundamental biology'
  };

storiesOf('Heading', module)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => <Heading heading={DEFAULTS.heading} />);
