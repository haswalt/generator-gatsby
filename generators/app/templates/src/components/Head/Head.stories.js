import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Head from './index';

const DESCRIPTION = `Link element that adapts to internal and external hrefs`,
  DEFAULTS = {
    title: 'Page title',
    description: 'Page description',
    cover: 'https://source.unsplash.com/random'
  };

storiesOf('Head', module)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => (
    <>
      <Head
        title={text('Title', DEFAULTS.title)}
        description={text('description', DEFAULTS.description)}
        cover={text('Cover Image', DEFAULTS.cover)}
      />
      <p>
        Inspect your <code>&lt;head&gt;</code> element for changes
      </p>
    </>
  ));
