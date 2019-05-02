const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project name'
      },
      {
        type: 'input',
        name: 'url',
        message: 'Project URL'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project description'
      },
      {
        type: 'input',
        name: 'brandColor',
        message: 'Brand color',
        default: '#111'
      },
      {
        type: 'input',
        name: 'prismicRepo',
        message: 'Prismic repository name'
      }
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationRoot(),
      { props: this.answers },
      {},
      {
        globOptions: {
          dot: true,
          // Ignore NPM special files
          ignore: [this.templatePath('gitignore')]
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
