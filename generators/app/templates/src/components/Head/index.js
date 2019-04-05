import React, { Component } from 'react';
import Helmet from 'react-helmet';

/**
 * Head component
 * Sets a page's head meta data
 * @property {string} title Title of the page
 * @property {string} description Description of the page
 * @property {string} cover URL of page cover image (social media)
 */
export default class Head extends Component {
  static defaultProps = {
    title: '<%= props.name %>',
    description: '<%= props.description %>',
    cover: ''
  };

  render() {
    const { title, description, cover } = this.props;

    return (
      <Helmet>
        {/* Basic */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={cover} />

        {/* Schema.org */}
        <meta itemprop="title" content={title} />
        <meta itemprop="description" content={description} />
        <meta itemprop="image" content={cover} />

        {/* Social */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={cover} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={cover} />
      </Helmet>
    );
  }
}
