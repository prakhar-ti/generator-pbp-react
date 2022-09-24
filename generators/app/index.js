"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const glob = require("glob");
const templateMap = require("./template-map");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the great ${chalk.red("generator-test")} generator!`)
    );

    const prompts = [
      {
        type: "confirm",
        name: "auth",
        message: "Would you like to add login signup pages?",
        default: false
      },
      {
        type: "confirm",
        name: "redux",
        message: "Would you like to add redux for state management?",
        default: false
      },
      {
        type: "confirm",
        name: "infra",
        message: "Would you like to setup infra for the project?",
        default: false
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.log("- Copy boilerplate files");

    const x = glob.sync("**", {
      cwd: this.sourceRoot(),
      dot: true,
      nodir: true
    });

    x.forEach(template => {
      this.fs.copyTpl(
        this.templatePath(template),
        this.destinationPath(
          templateMap.has(template) ? templateMap.get(template) : template
        ),
        this.props
      );
    });

    if (this.props.auth === true) {
      this.composeWith(require.resolve("../auth"));
    }

    if (this.props.redux === true) {
      this.composeWith(require.resolve("../redux"));
    }

    if (this.props.infra === true) {
      this.composeWith(require.resolve("../infra"));
    }
  }
};
