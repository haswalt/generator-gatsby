import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './index';

const DESCRIPTION = `Global site header component`;

storiesOf('Header', module)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => <Header />);
