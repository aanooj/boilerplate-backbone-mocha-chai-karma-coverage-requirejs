Boilerplate-Backbone-Mocha-Coverage-Requirejs
====================

## Getting started ##

The easiest way to get started is to install Git and clone the repository 

```bash
git clone https://github.com/aanooj/boilerplate-backbone-mocha-chai-karma-coverage-requirejs.git
```

This is boilerplate with ready to TDD:
 * karma-runner: http://karma-runner.github.io/0.8/index.html
 * mocha: http://visionmedia.github.io/mocha/
 * chai: http://chaijs.com/ 
 * RequireJS: http://requirejs.org/


You will need to download and install [Node.js](http://nodejs.org/) if you want
to use the commands in the following sections.

## Updating dependencies ##
Third party packages may update independently from this main repo, so it's a
good idea to update after fetching.


## Install global dependencies. ##

Depending on your user account you may need to gain elevated privileges using something like `sudo`.

``` bash
npm install -g grunt-cli bower
```


## Optionally install coveralls.
``` bash
npm install -g coveralls
```


## Install NPM dependencies.
``` bash
npm install
```


## Install Bower dependencies.
``` bash
bower install
```

## Running tests ##

To run tests, simply add `.spec.js` files throughout your application and they
will be automatically picked up by the runner.  You can find example test specs
in the `test` directory.

To run Karma as a daemon:
*Which will automatically run your tests after you save.*

``` bash
grunt karma:daemon
```

To run Karma tests once and output the results:

``` bash
grunt karma:run
```

After either above command is run, code coverage reports will be available in
the `test/coverage` folder.

By default, the test runner is Mocha.  You can easily change this by
editting karma configuration in `karma.js`


##Running test in brower using Karma ##

To run tests on browers you can install `karma-chrome-launcher` and change the browser from `phantomJS` to `chrome`.

For more launchers install module from [karma launchers](http://karma-runner.github.io/0.10/config/browsers.html)