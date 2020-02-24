import { storiesOf } from '@storybook/react';
import React from 'react';
import Copy from './index';

const DESCRIPTION = `Consistent copy`,
  DEFAULTS = {
    content: (
      <p>
        Ante netus urna hac posuere ullamcorper fermentum aliquam quisque nostra
        diam dictumst facilisi potenti nam per eu sollicitudin metus lacus
      </p>
    )
  };

storiesOf('Copy', module)
  .addParameters({
    info: DESCRIPTION
  })
  .add('Default', () => <Copy content={DEFAULTS.content} />);
