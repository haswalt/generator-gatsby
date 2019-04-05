import React, { Component } from 'react';
import Helmet from 'react-helmet';
import favicon from '../../assets/img/favicon.png';
import './global/index.css';
import styles from './styles.module.css';

const JSON_LD_META = [
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
];

/**
 * Page template
 * The core page layout that sets up a view
 * Automatically wrapped around all other tempaltes and views by gatsby-plugin-layout
 */
export default class Layout extends Component {
  shimCSSVars = () => {
    const { body } = document,
      cssVarsSupported =
        window.CSS && window.CSS.supports && window.CSS.supports('(--a: 0)');

    try {
      !cssVarsSupported && (body.style.visibility = 'hidden');

      cssVarsPonyfill({
        watch: true,
        updateURLs: false,
        onComplete() {
          setTimeout(() => (body.style.visibility = 'visible'), 10);
        }
      });
    } catch (e) {
      // noop
    }
  };

  componentDidMount() {
    this.shimCSSVars();
  }
  render() {
    const { children } = this.props;

    return (
      <div styleName="styles.page">
        <Helmet>
          <html lang="en" />
          <meta name="author" content="tomorrowstudio.co" />
          <meta name="rating" content="general" />
          <link rel="shortcut-icon" href={favicon} />
          <script type="application/ld+json">
            {JSON.stringify(JSON_LD_META)}
          </script>
        </Helmet>

        <main styleName="styles.content">{children}</main>
      </div>
    );
  }
}
