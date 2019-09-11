const Generator = require('yeoman-generator');

const FEATURE_FILES = {
  prismic: [
    'gatsby-browser.js',
    'src/lib',
    'src/components/RichText',
    'generators/templates/page'
  ],
  netlify: ['netlify.toml'],
  bloom: ['src/containers/App/css/variables.css'],
  state: ['generators/templates/store'],
  form: ['src/components/Form'],
  video: ['src/components/Video']
};

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Site name'
      },
      {
        type: 'input',
        name: 'url',
        message: 'Site URL'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Site description'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Site author'
      },
      {
        type: 'input',
        name: 'brandColor',
        message: 'Brand color',
        default: '#111'
      },
      {
        type: 'checkbox',
        name: 'features',
        message: 'Extra features',
        choices: [
          {
            name: 'Prismic content source',
            value: 'prismic',
            checked: true
          },
          {
            name: 'Netlify configuration',
            value: 'netlify',
            checked: true
          },
          {
            name: 'Starter CSS design system',
            value: 'bloom',
            checked: true
          },
          {
            name: 'CSS variables polyfill',
            value: 'cssVariables',
            checked: true
          },
          {
            name: 'State management',
            value: 'state',
            checked: false
          },
          {
            name: 'Form components',
            value: 'form',
            checked: false
          },
          {
            name: 'Video component',
            value: 'video',
            checked: false
          }
        ]
      },
      {
        type: 'input',
        name: 'prismic',
        message: 'Prismic repository name',
        when: ({ features }) => features.includes('prismic')
      }
    ]);
  }

  writing() {
    const excludeFolders = Object.keys(FEATURE_FILES)
      .map(feature => {
        return !this.answers.features.includes(feature)
          ? FEATURE_FILES[feature]
          : [];
      })
      .flat();

    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationRoot(),
      { props: this.answers },
      {},
      {
        globOptions: {
          dot: true,
          // Ignore excluded features and NPM special fiels
          ignore: [
            this.templatePath('gitignore'),
            ...excludeFolders.map(folder => this.templatePath(folder))
          ]
        }
      }
    );

    // Explicitly copy NPM special files
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );
  }

  install() {
    this.npmInstall();
  }
};
