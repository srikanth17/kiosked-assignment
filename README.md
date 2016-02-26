# Kiosked

The best assignment

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/srikanth/kiosked/master/dist/kiosked.min.js
[max]: https://raw.github.com/srikanth/kiosked/master/dist/kiosked.js

## Prerequisite Technologies
Node.js - https://nodejs.org/en/
Npm - https://www.npmjs.com

## Prerequisite packages
The assignment is built with grunt, a task runner. To install grunt globally, use the command below

npm install -g grunt-cli

The build commands are entered using a Command Line Interface (CLI).

### Windows
Command Prompt is used to enter the commands.

### OSX
Terminal is used to enter the commands.

## Installation
The project is created using the following command

npm init

This command will create a package.json, which contains all dependencies of the project.

npm install -S grunt

This will install grunt.

npm install bootstrap-sass

This will install bootstrap to the project.

Create a Gruntfile.js on the root of the project. This file allows to configure the tasks and load them. 

To run the tasks, enter grunt on the terminal or command prompt.

Tasks are performed and a watcher task watches or waits for code changes.

## Grunt plugins used
grunt-contrib-sass - Compiles Sass to CSS
To install 
npm install grunt-contrib-sass --save-dev

grunt-contrib-concat - To concatenate CSS & JS files
To install
npm install grunt-contrib-concat --save-dev

grunt-contrib-watch - Run predefined tasks whenever watched file patterns are added, changed or deleted.
To install
npm install grunt-contrib-watch --save-dev

grunt-insert-timestamp - To insert a timestamp into a file.
To install
npm install grunt-insert-timestamp --save-dev

To enable the above task
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-insert-timestamp');

These are added to package.json as devDependencies.

## Documentation
A HTML page (index.html) that contains a title, a paragraph and a button is created. The build time is retrived using the grunt-insert-timestamp plugin.

A "Click me" opens a modal dialog box that has the counter running from 0.

The title, paragraph and button text were changed to red and background colour of the button is also red, but 25% lighter. This is implemented using the inbuilt lighten Sass function.

The HTML page is fully responsive to all the devices and the font-size of the content is changed depending upon the screen size. This is implemented using the media queries. Mixins are used to reuse the same code.

The modal box is implemented using jQuery. The counter starts when the "Click me" button is clicked and pauses when the close button is clicked. The counter begins from the paused number and starts counting. The page should be refreshed to bring the counter to 0 again.

The CSS & JS files are concatenated and only one CSS and one JS file is added to the HTML page. The following files are added to the page.
styles.css - contains compiled Sass
scripts.js
jQuery - Included from google CDN.

## To Run
Save the downloaded code into a directory. In package directory, enter the following command

npm install

This will install all modules listed as dependencies in package.json