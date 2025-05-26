// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/scripts/main.js', 'build').setPublicPath('build');
mix.postCss('src/styles/main.css', 'build', [
    require('postcss-for')
]);
mix.copyDirectory('src/pictures', 'build/pictures');
mix.copy('src/pdf/cvNickWeemaes.pdf', 'build/pdf/cvNickWeemaes.pdf');