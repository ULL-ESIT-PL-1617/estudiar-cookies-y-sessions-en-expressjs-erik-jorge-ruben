var gulp = require('gulp');
var shell = require('gulp-shell');


gulp.task('cookie-create', shell.task(['xdg-open https://cookies-ruben.herokuapp.com/cookies']));

gulp.task('cookie-delete', shell.task(['xdg-open https://cookies-ruben.herokuapp.com/cookies/eliminar']));

gulp.task('cookie-tiempo', shell.task(['xdg-open https://cookies-ruben.herokuapp.com/cookies/tiempo']));

gulp.task('cookie-tiempo-prueba', shell.task(['xdg-open https://cookies-ruben.herokuapp.com/cookies/tiempo/prueba']));
