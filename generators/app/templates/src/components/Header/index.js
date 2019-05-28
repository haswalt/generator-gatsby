import { StaticQuery } from 'gatsby';
import React, { Component } from 'react';
import Headroom from 'react-headroom';
import AdaptiveLink from '../AdaptiveLink';
import Hamburger from '../Hamburger';
import './styles.module.css';

function resolvePage(page) {
  return !!page.uid ? page : page.url;
}

/**
 * Header component
 * Global site header component
 */
export default class Header extends Component {
  render() {
    const { className, ...attrs } = this.props;

    return (
      <StaticQuery
        render={query => {
          const { data } = query.header;

          return (
            <Headroom styleName="header" className={className || ''} {...attrs}>
              <header styleName="header-inner">
                <AdaptiveLink href="/">{/* Logo goes here */}</AdaptiveLink>
                <nav>
                  {/* Nav goes here
                  <AdaptiveLink
                    activeClassName="active"
                    href={resolvePage(primary.page)}
                    >
                    label
                  </AdaptiveLink>
                  */}
                </nav>
                <Hamburger styleName="hamburger" />
              </header>
            </Headroom>
          );
        }}
        query={graphql`
          {
            header:
          }
        `}
      />
    );
  }
}
