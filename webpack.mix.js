const mix = require('laravel-mix');

mix
    .js('./assets/js/app.js', 'public')
    .sass('./assets/scss/app.scss', 'public');