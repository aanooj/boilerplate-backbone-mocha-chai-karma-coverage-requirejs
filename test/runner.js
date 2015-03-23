(function(window) {
    "use strict";

    var karma = window.__karma__;

    // Put Karma into an asynchronous waiting mode until we have loaded our
    // tests.
    karma.loaded = function() {};

    if (window.chai) {
        // Optionally use chai with Mocha.
        window.expect = window.chai.expect;
    }


    var tests = [];
    for (var file in karma.files) {
        if (karma.files.hasOwnProperty(file)) {
            if (/^\/base\/(app|test)\/.*\.spec\.js$/.test(file)) {
                tests.push(file);
            }
        }
    }

    // Set the application endpoint and load the configuration.
    require.config({
        paths: {
            underscore: "../bower_components/lodash/dist/lodash.underscore"
        },

        baseUrl: "base/app"

    });

    require([
        "config",
        "underscore"
    ], function(config, _) {

        // Load all specs and start Karma.
        require(tests, karma.start);
    });
})(this);
