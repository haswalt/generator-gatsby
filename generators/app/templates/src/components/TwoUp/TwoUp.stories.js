import { text, object, array, boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import TwoUp from './index';

const DESCRIPTION = `Simple two-column adpative layout`,
  DEFAULTS = {
    primary: <img src="https://source.unsplash.com/random" />,
    secondary: (
      <>
        <h1>Title</h1>
        <p>
          Felis scelerisque laoreet justo conubia commodo consequat id
          vestibulum aenean erat auctor gravida quam morbi
        </p>
      </>
    ),
    orientation: 'default'
  },
  ORIENTATION_OPTIONS = {
    Default: 'default',
    Reverse: 'reverse'
  };

storiesOf('TwoUp', module)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => (
    <TwoUp
      primary={DEFAULTS.primary}
      secondary={DEFAULTS.secondary}
      orientation={select(
        'Orientation',
        ORIENTATION_OPTIONS,
        DEFAULTS.orientation
      )}
    />
  ));
