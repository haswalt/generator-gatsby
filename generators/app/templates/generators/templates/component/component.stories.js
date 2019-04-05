import React from 'react';
import { storiesOf } from '@storybook/react';
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
    <{{name}} {{#each props}}{{this.name}}={DEFAULTS.{{this.name}} } {{/each}} />
  ));
