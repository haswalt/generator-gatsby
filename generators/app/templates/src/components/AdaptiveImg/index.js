import Img from 'gatsby-image';
import React, { Component } from 'react';
import './styles.module.css';

/**
 * AdaptiveImg component
 * Automatically lazy loads and uses src sets if appropriate data is available,
 * otherwise falls back to a standard <img> element
 * @property {string} src Optional src for static image
 * @property {object} data Image data object from Prismic
 */
export default class AdaptiveImg extends Component {
  static defaultProps = {
    data: {},
    alt: ''
  };

  render() {
    const { data, className, alt, ...attrs } = this.props,
      hasImgSet = !!data.localFile && !!data.localFile.childImageSharp;

    return hasImgSet ? (
      <Img
        styleName="img"
        fluid={data.localFile.childImageSharp.fluid}
        className={className || ''}
        alt={alt || data.alt || ''}
        {...attrs}
      />
    ) : (
      <div styleName="staticWrapper" className={className || ''} {...attrs}>
        <img styleName="img" src={data.url} alt={alt || data.alt || ''} />
      </div>
    );
  }
}
