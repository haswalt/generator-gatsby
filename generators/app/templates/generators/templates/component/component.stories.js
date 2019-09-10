import { text, object, array, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import {{name}} from './index'

const DESCRIPTION = `{{description}}`,
  DEFAULTS = {
{{#each props}}    {{this.name}}: {{{this.value}}}{{#unless @last}},{{/unless}}
{{/each}}
  };

storiesOf('{{name}}', module)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => (
    <{{name}} {{#each props}}{{this.name}}={{esc '{'}}DEFAULTS.{{this.name}}{{esc '}'}} {{/each}} />
  ));
