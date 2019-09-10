import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import React from 'react';
import Story from './components/Story';

/**
 * Gatsby patching
 * Stub globals and navigation
 */
global.__PATH_PREFIX__ = '';
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
};
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

/**
 * Storybook config
 * Set global opts and decorators
 */
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: '<%= props.name %>',
      brandUrl: '<%= props.url %>',
      colorPrimary: '<%= props.brandColor %>',
      colorSecondary: '<%= props.brandColor %>'
    }),
    panelPosition: 'bottom'
  }
});
addDecorator(withInfo);
addDecorator(withKnobs({ escapeHTML: false }));
addDecorator(storyFn => <Story>{storyFn()}</Story>);

/**
 * Load stories
 * Import all files ending with *.stories.js
 */
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
