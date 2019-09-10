import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, array } from '@storybook/addon-knobs';
import Select from './index';

const DESCRIPTION = `Select form input`,
  DEFAULTS = {
    options: [
      { value: 'dog', label: 'Dog' },
      { value: 'cat', label: 'Cat' },
      { value: 'bird', label: 'Bird' }
    ],
    label: 'Animals',
    validation: {}
  };

storiesOf('Form/Select', module)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => (
    <Select
      options={array('Options', DEFAULTS.options)}
      label={text('Label', DEFAULTS.label)}
    />
  ));
