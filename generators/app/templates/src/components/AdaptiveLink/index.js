import { Link } from 'gatsby';
import React, { Component } from 'react';
import { resolveDocument } from '../../utils/resolver';

/**
 * AdaptiveLink component
 * Link element that adapts to internal and external hrefs
 * @property {string} href
 */
export default class AdaptiveLink extends Component {
  static defaultProps = {
    href: ''
  };

  render() {
    const { href, children, className, ...attrs } = this.props,
      isDocument = typeof href === 'object',
      internalLink = isDocument || /^\/(?!\/)/.test(href),
      to = isDocument ? resolveDocument(href) : href;

    let LinkElement = internalLink ? Link : 'a';

    return (
      <LinkElement
        {...(internalLink ? { to } : { href })}
        className={className || ''}
        {...attrs}
      >
        {children}
      </LinkElement>
    );
  }
}
