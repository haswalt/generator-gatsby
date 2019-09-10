import { object, text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Input from './index';

const DESCRIPTION = `Styled and controlled form input`,
  DEFAULTS = {
    label: 'Name',
    placeholder: 'John Smith',
    type: 'text',
    validation: {
      valid: 'Looks good',
      invalid: `Doesn't look right`
    }
  },
  TYPE_OPTIONS = ['text', 'url', 'phone', 'password'];

storiesOf('Form/Input', module)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => (
    <Input
      label={text('Label', DEFAULTS.label)}
      type={select('Type', TYPE_OPTIONS, DEFAULTS.type)}
      placeholder={text('Placeholder', DEFAULTS.placeholder)}
      validation={object('Validation Messages', DEFAULTS.validation)}
    />
  ));
