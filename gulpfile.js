const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const responsive = require('gulp-responsive');

gulp.task('responsive', function() {
    return gulp.src('src/*.{jpg}').pipe(responsive({
            '*.jpg': [{
                    width: 425,
                    rename: {
                        suffix: '-425px',
                        extname: '.jpg',
                    },
                }, {
                    width: 425,
                    rename: {
                        suffix: '-425px',
                        extname: '.webp',
                    },
                }, {
                    width: 768,
                    rename: {
                        suffix: '-768px',
                        extname: '.jpg',
                    },
                }, {
                    width: 768,
                    rename: {
                        suffix: '-768px',
                        extname: '.webp',
                    },
                },
                {
                    width: 1400,
                    rename: {
                        suffix: '-1400px',
                        extname: '.jpg',
                    },
                }, {
                    width: 1400,
                    rename: {
                        suffix: '-1400px',
                        extname: '.webp',
                    },
                },
                {
                    width: 1600,
                    rename: {
                        suffix: '-1600px',
                        extname: '.jpg',
                    },
                }, {
                    width: 1600,
                    rename: {
                        suffix: '-1600px',
                        extname: '.webp',
                    },
                }
            ],
        }, {
            // Global configuration for all images
            quality: 65,
            // Don't try to enlarge source images beyond their original size, and don't fail when this is encountered
            skipOnEnlargement: true,
            withoutEnlargement: true,
            errorOnEnlargement: false,
            // Use progressive (interlace) scan for JPEG and PNG output
            progressive: true,
            // Strip all metadata
            withMetadata: false
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('optimize', function() {
    gulp.src('dist/*.{jpg,png,webp}')
    .pipe(imagemin())
    .pipe(gulp.dest('optimized'))
});
