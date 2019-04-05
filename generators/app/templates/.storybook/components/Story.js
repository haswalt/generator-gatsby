import React, { Component } from 'react';
import '../../src/containers/Layout/global/index.css';

/**
 * Story component
 * Wraps stories
 * Provides necessary gloabls and basic layout
 */
export default class Story extends Component {
  render() {
    const { children } = this.props;

    return <div style={{ margin: '1rem' }}>{children}</div>;
  }
}
