import React, { Component } from 'react';
import './styles.module.css';
import AdaptiveLink from '../AdaptiveLink';

/**
 * Nav link component that takes href or Prismic document
 * @property {object} link Linked Prismic document
 * @property {string} href Direct href
 * @property {string} label Text to show for link
 * @property {onClick} function Click handler callback
 *
 */
export default class NavLink extends Component {
  static defaultProps = {
    label: '',
    href: '',
    document: {},
    prefix: ''
  };

  render() {
    const { document, href, label, prefix, className } = this.props;
    const link = href
      ? href
      : `/${prefix && prefix + '/'}${
          document.raw.uid !== 'home' ? document.raw.uid : ''
        }`;

    return (
      <AdaptiveLink
        styleName="link"
        href={link}
        partiallyActive={link !== '/'}
        activeClassName="active"
        className={className || ''}
      >
        {label}
      </AdaptiveLink>
    );
  }
}
