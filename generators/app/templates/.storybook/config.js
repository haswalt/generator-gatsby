import { addParameters, configure } from '@storybook/react';
import '@tomorrow/bloom/bloom.css';
import '../src/globals/css/variables.css';
import '../src/globals/css/global.css';

// Stub Gatsby's globals
global.__PATH_PREFIX__ = '';
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
};

// Stub Gatsby's navigation
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};

// Automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

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

configure(loadStories, module);
