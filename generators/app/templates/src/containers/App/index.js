import React<% if (props.features.includes('cssVariables')) { %>, { useEffect }<% } %> from 'react';
import Helmet from 'react-helmet';
import favicon from '../../assets/img/favicon.png';
import Meta from '../../components/Meta';
import * as fragments from '../../lib/fragments';
import './css/index.css';
import styles from './styles.module.css';

// 'Use' silent deps for linters
styles; // eslint-disable-line
fragments; // eslint-disable-line
<% if (props.features.includes('cssVariables')) { %>
function customPolyfills() {
  const cssVars = {
    test:
      ((window || {}).CSS || {}).supports && window.CSS.supports('(--a: 0)'),
    config: {
      watch: true,
      updateURLs: false,
      onComplete() {
        setTimeout(() => (document.body.style.visibility = 'visible'), 10);
      }
    }
  };

  if (!cssVars.test) {
    import(
      /* webpackChunkName: "css-vars-ponyfill" */ 'css-vars-ponyfill'
    ).then(({ default: cssVarsPonyfill }) => {
      document.body.style.visibility = 'hidden';
      cssVarsPonyfill(cssVars.config);
    });
  }
}
<% } %>
/**
 * App container
 * Entrypoint for the application
 */
export default function App({ children }) {
  <% if (props.features.includes('cssVariables')) { %>useEffect(customPolyfills, []);
<% } %>
  return (
    <div styleName="styles.page">
      <Helmet>
        {/* Site meta */}
        <html lang="en" />
        <meta name="author" content="<%= props.author %>" />
        <meta name="rating" content="general" />
        <link rel="shortcut-icon" href={favicon} />

        {/* JSON LD meta */}
        <script type="application/ld+json">
          {JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': '#website',
              url: '<%= props.url %>',
              name: '<%= props.name %>'
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              url: '<%= props.url %>',
              '@id': '#organization',
              name: '<%= props.name %>'
            }
          ])}
        </script>
      </Helmet>

      {/* Default page meta */}
      <Meta title="<%= props.name %>" description="<%= props.description %>" />

      <main styleName="styles.content">{children}</main>
    </div>
  );
}
