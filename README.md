## Getting Started
Download the source from the link below.

https://github.com/srikanth17/kiosked-assignment

## Prerequisite Technologies
Node.js - https://nodejs.org/en/
Npm - https://www.npmjs.com

## Prerequisite packages
The assignment is built with grunt, a task runner. To install grunt globally, use the command below

npm install -g grunt-cli

## To Build & Run
Inside the cloned/downloaded folder, run the following commands

npm install

This will install all modules listed as dependencies in package.json

grunt

This will build & package.

Open index.html in a web browser to view the HTML page.

## Watcher
Any changes to files in css and js folders will trigger the watch task. Changes to main.scss also triggers the watch task.

## Timestamp
Build timestamp is retrieved using grunt-insert-timestamp package. Timestamp will be updated in timestamp.js inside js folder. It uses the empty timestamp.js file from the top level directory and appends the timestamp in that file. So, we should leave the top level timestamp.js empty.