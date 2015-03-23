define(["app", "router"], function(app, Router) {
    "use strict";

    describe('application', function() {
        it('should return app as object', function() {
            assert.equal(typeof app, 'object');
        });

        it('should have router is not undefined', function() {
            assert(typeof Router !== 'undefined');
        });

        it("New Router is a Backbone Router", function() {
            assert(Router);
            assert(new Router() instanceof Backbone.Router);
        });

        it('new router instance should have index method', function() {
            var router = new Router();
            assert(typeof router.index === 'function');
        });
    });

    describe("Simple tests examples", function() {
        it("should detect true", function() {
            assert.equal(true, true);
        });

        it("should increments values", function() {
            var mike = 0;

            assert.equal(mike++ === 0, true);
            assert.equal(mike === 1, true);
        });

        it("should increments values (improved)", function() {
            var mike = 0;

            assert.equal(mike++, 0);
            assert.equal(mike, 1);
        });
    });

    describe("Tests with before/after hooks", function() {
        var a = 0;

        beforeEach(function() {
            a++;
        });

        afterEach(function() {
            a = 0
        });

        it("should increment value", function() {
            assert.equal(a, 1);
        });

        it("should reset after each test", function() {
            assert.equal(a, 1);
        });
    });

    describe("Async tests", function() {
        it("should wait timer", function(done) {
            setTimeout(function() {
                assert.equal(true, true);
                done();
            }, 500);
        });
    });
});
