import { StaticQuery, graphql } from 'gatsby';
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
  className,
  ...attrs
}) {
  return (
    <StaticQuery
      query={{esc '{'}}{{camelCase name}}Query}
      render={({ prismic }) => {
          const { [type]: data } = prismic;
          return (
            <div className={className || ''} {...attrs}></div>
          );
        }}
    />
  );
}

const {{camelCase name}}Query = graphql`
  query {
    prismic {

    }
  }
`;