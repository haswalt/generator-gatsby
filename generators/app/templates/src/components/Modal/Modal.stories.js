import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from './index';
import { boolean } from '@storybook/addon-knobs';

const DESCRIPTION = `Modal UI component`,
  DEFAULTS = {
    open: true
  };

storiesOf('Modal', module)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => (
    <Modal open={boolean('Open', DEFAULTS.open)}>
      <h2>Example modal</h2>
      <p>
        Vel netus porttitor diam venenatis curae dignissim penatibus convallis
        nunc
      </p>
    </Modal>
  ));
