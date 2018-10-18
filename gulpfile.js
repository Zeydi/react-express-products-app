const gulp = require("gulp");
const LiveServer = require("gulp-live-server");

gulp.task("live-server", function() {
  var server = new LiveServer("server/main.js");
  server.start();
});
module.exports = gulp;
