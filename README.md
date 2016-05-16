# sampleNod
This repository contains the files necessary to run a sample application in Node.js and to run CI tests on Shippable.

This Node.js app is a basic two-tier web app consisting of a front-end web service and a back-end api service.



Contents:
This repository has 6 files and the functions of each file are as follows:

1. README.md - Contains an some basic conventions and guidelines to show the working of folder level caching.
2. Shippable.yml - Configured for the language, version & to run a test during the CI step. http://docs.shippable.com/ci_configure/ gives you a detailed introduction on how to configure your CI on shippable.
3. Package.json - Installs all the libraries mentioned in dependencies list when we run npm install command from the root of this folder. The npm install command creates a new folder called node_modules which contains all the libraries mentioned in the dependency list.
4. index.js -
5. test.js -
6. Gruntfile.js -
