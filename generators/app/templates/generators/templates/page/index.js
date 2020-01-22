import { graphql } from 'gatsby';
import React from 'react';
import Meta from '../../components/Meta';
import './styles.module.css';

<% if (props.features.includes('state')) { %>{{#if hasState}}export default observer({{properCase type}});
{{else}}<% } else { %>export default {{/if}}<% } else { %>export default <% } %>withFragments({{properCase type}}{{#if isTemplate}}Template{{else}}Page{{/if}}){{/if}}
function {{properCase type}}{{#if isTemplate}}Template{{else}}Page{{/if}}({ data: query }){
  const { {{type}}: data } = query.prismic;

  return !!data ? (
    <>
      <Meta  title={data.title} description={data.description} />
    </>
  ) : null;
}

export const query = graphql`
  query{{#if isTemplate}}($uid: String!){{/if}} {
    prismic {
      {{type}}(uid: {{#if isTemplate}}$uid{{else}}"{{type}}"{{/if}}, lang: "en-us") {
        title
        description
      }
    }
  }
`
