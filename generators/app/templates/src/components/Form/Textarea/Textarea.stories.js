import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Textarea from './index';

const DESCRIPTION = `A styled and controlled textarea that grows based on input`;

storiesOf('Form/Textarea', module)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => <Textarea label={text('Label', 'Your message')} />);
