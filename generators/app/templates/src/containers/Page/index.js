import React, { Component } from 'react';
import Head from '../../components/Head';

/**
 * Standard page container
 */
export default class Page extends Component {
  static defaultProps = {
    title: '<%= props.name %>',
    description: '<%= props.description %>',
    cover: ''
  };

  render() {
    const { title, description, cover, children } = this.props;

    return (
      <>
        <Head title={title} description={description} cover={cover} />
        {children}
      </>
    );
  }
}
