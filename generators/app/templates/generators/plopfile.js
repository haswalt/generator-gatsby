const PATHS = {
  component: {
    templates: {
      index: './templates/component/index.js',
      withData: './templates/component/staticQuery.js',
      stories: './templates/component/component.stories.js'
    },
    dest: '../src/components'
  },
  page: {
    template: './templates/page/index.js',
    dests: {
      page: '../src/pages',
      template: '../src/templates'
    }
  }
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
    description: 'Scaffold a new component',
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

  /**
   * Page generator
   * Creates a new page under src/pages
   */
  plop.setGenerator('page', {
    description: 'Scaffold a new page',
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

  plop.setHelper('esc', str => str);
};
