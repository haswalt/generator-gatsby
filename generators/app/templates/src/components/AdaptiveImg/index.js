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
    src: '',
    alt: ''
  };

  render() {
    const { src, data, className, alt, ...attrs } = this.props,
      hasImgSet = !!data.localFile && !!data.localFile.childImageSharp,
      ImgElement = hasImgSet ? Img : 'img';

    return (
      <ImgElement
        {...(hasImgSet
          ? { fluid: data.localFile.childImageSharp.fluid }
          : { src: src || data.url })}
        styleName="img"
        className={className || ''}
        alt={alt || data.alt || ''}
        {...attrs}
      />
    );
  }
}
