const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Plugin name',
        transformer: name => `gatsby-plugin-${name}`,
        filter: name => `gatsby-plugin-${name}`
      },
      {
        type: 'input',
        name: 'description',
        message: 'Plugin description'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Plugin author'
      },
      {
        type: 'input',
        name: 'github',
        message: `Plugin's Github repository`
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
