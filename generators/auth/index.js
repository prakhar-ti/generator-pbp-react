'use strict';
const Generator = require('yeoman-generator');
// const chalk = require('chalk');
// const yosay = require('yosay');
const glob = require('glob')
// const templateMap = require('./template-map')

module.exports = class extends Generator {
  writing() {
    this.log("- Add files for authorization page");
    
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

                
    // this.log("- Add instructions in README.md");
    // this.fs.append('README.md','### Adding Authorization Page:\nAdd the following routes in the <Routes> component in `src/index.tsx`\n```JSX\n<Route path="/signin" element={<Signin />} />\n<Route path="/login" element={<Signin />} />\n<Route path="/signup" element={<Signin />} />\n<Route path="/register" element={<Signin />} />\n```');
    
  }
};
