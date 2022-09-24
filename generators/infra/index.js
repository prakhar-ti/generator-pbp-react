"use strict";
const Generator = require("yeoman-generator");
const glob = require("glob");

module.exports = class extends Generator {
  writing() {
    this.log("- Add files for creating a CDK stack");

    const x = glob.sync("**", {
      cwd: this.sourceRoot(),
      dot: true,
      nodir: true
    });

    x.forEach(template => {
      this.fs.copyTpl(
        this.templatePath(template),
        this.destinationPath(template),
        this.props
      );
    });

    this.log("- Add instructions in README.md");
    this.fs.append(
      "README.md",
      "### Setup Infra\nRun the following command in the `infra` folder:\n```Bash\ntouch output.txt\nnpm install\n./node_modules/.bin/cdk deploy --require-approval=never --outputs-file output.txt\n```"
    );
  }
};
