'use strict';
const Generator = require('yeoman-generator');
const glob = require('glob')

module.exports = class extends Generator {
  writing() {
    this.log("- Add files for using Redux");
    
    const x = glob
    .sync('**', {
      cwd: this.sourceRoot(),
      dot: true,
      nodir: true,
    });

    x
    .forEach((template) => {
      this.fs.copyTpl(
        this.templatePath(template),
        this.destinationPath(
            template
        ),
        this.props
      )
    });
  }

  install(){
    this.log('- Install dependencies for using redux')
    this.npmInstall(['redux']);
    this.npmInstall(['react-redux']);
  }
};
