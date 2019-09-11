const PATHS = {
  component: {
    templates: {
      index: './templates/component/index.js',
      withData: './templates/component/staticQuery.js',
      stories: './templates/component/component.stories.js'
    },
    dest: '../src/components'
  }<% if (props.features.includes('prismic')) { %>,
  page: {
    template: './templates/page/index.js',
    dests: {
      page: '../src/pages',
      template: '../src/templates'
    }
  }<% } %><% if (props.features.includes('state')) { %>,
  state: {
    template: './templates/store/index.js',
    dest: '../src/stores'
  }<% } %>
};

function transformPropsString(props) {
  const objectify = prop => {
    let vals = prop.split(':');
    return { name: vals[0], value: vals[1], type: typeof eval(vals[1]) };
  };

  if (!props) {
    return;
  }

  return props
    .split(',')
    .map(propString => propString.trim())
    .map(objectify);
}

module.exports = plop => {
  /**
   * Component generator
   * Creates a new component under src/components
   */
  plop.setGenerator('component', {
    description: 'Generate a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description'
      },
      {
        type: 'confirm',
        name: 'hasData',
        message: 'Will it query for data?',
        default: false
      },
      {
        type: 'input',
        name: 'props',
        message: 'Props :: [prop]:[value]',
        filter: transformPropsString
      }
    ],
    actions: props => [
      {
        type: 'add',
        path: `${PATHS.component.dest}/{{name}}/index.js`,
        templateFile: props.hasData
          ? PATHS.component.templates.withData
          : PATHS.component.templates.index
      },
      {
        type: 'add',
        path: `${PATHS.component.dest}/{{name}}/styles.module.css`
      },
      {
        type: 'add',
        path: `${PATHS.component.dest}/{{name}}/{{name}}.stories.js`,
        templateFile: PATHS.component.templates.stories
      }
    ]
  });
  <% if (props.features.includes('prismic')) { %>
  /**
   * Page generator
   * Creates a new page under src/pages
   */
  plop.setGenerator('page', {
    description: 'Generate a new page',
    prompts: [
      {
        type: 'input',
        name: 'type',
        message: 'Prismic type'
      },
      {
        type: 'confirm',
        name: 'isTemplate',
        message: 'Is this a repeatable template?',
        default: false
      },<% if (props.features.includes('state')) { %>
      {
        type: 'confirm',
        name: 'hasState',
        message: 'Does it need to observe global state?',
        default: false
      }<% } %>
    ],
    actions: props => {
      const destDir = props.isTemplate
        ? PATHS.page.dests.template
        : PATHS.page.dests.page;

      return [
        {
          type: 'add',
          path: `${destDir}/{{camelCase type}}/index.js`,
          templateFile: PATHS.page.template
        },
        {
          type: 'add',
          path: `${destDir}/{{camelCase type}}/styles.module.css`
        }
      ];
    }
  });
  <% } %><% if (props.features.includes('state')) { %>
  /**
   * Store generator
   * Creates a new store under src/stores
   */
  plop.setGenerator('store', {
    description: 'Generate a new store',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Store name'
      }
    ],
    actions: () => [
      {
        type: 'add',
        path: `${PATHS.store.dest}/{{ properCase name }}/index.js`,
        templateFile: PATHS.store.template
      }
    ]
  });
  <% } %>
  plop.setHelper('esc', str => str);
};
