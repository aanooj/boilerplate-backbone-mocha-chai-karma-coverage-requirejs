module.exports = function() {
  this.loadNpmTasks("grunt-contrib-jshint");
  return this.config("jshint", ["app/**/*.js"]);
};

// ---
// generated by coffee-script 1.9.0