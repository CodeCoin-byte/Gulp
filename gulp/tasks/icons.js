import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const icons = () => {
  return app.gulp.src(app.path.src.icons)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'ICONS',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(app.plugins.newer(app.path.build.icons))
    .pipe(
      app.plugins.if(
        app.isBuild,
        webp()
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        app.gulp.dest(app.path.build.icons)
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        app.gulp.src(app.path.src.icons)
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        app.plugins.newer(app.path.build.icons)
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        imagemin({
          progressive: true,
          svgoplugins: [{ removeViewBox: false }],
          interlaced: true,
          optimizetionLevel: 2,
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.icons))
    .pipe(app.plugins.browsersync.stream());
}