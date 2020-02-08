import React from 'react';
import './styles.module.css';

/**
 * {{name}} component
 * {{description}}
{{#each props}} * @property {{esc '{'}}{{this.type}}{{esc '}'}} {{this.name}}
{{/each}}
 */
export default function {{name}}({ {{#each props}}
  {{this.name}} = {{{this.value}}},{{/each}}
  className = '',
  ...attrs
}) {
  return (
    <div className={className} {...attrs}>

    </div>
  );
}