import React from 'react';
import { storiesOf } from '@storybook/react';
import Range from './index';

const DESCRIPTION = `Range input`;

storiesOf('Form/Range', module)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => <Range />);
