import  * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    js: `${buildFolder}/assets/js`,
    images: `${buildFolder}/assets/img`,
    icons: `${buildFolder}/assets/icons`,
    css: `${buildFolder}/assets/css`,
    html: `${buildFolder}/`,
    fonts: `${buildFolder}/assets/fonts`,
    files: `${buildFolder}/assets/files`,
  },
  src: {
    js: `${srcFolder}/assets/js/*.js`,
    images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp}`,
    icons: `${srcFolder}/assets/icons/*.{svg,png,gif}`,
    scss: `${srcFolder}/assets/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/assets/files/**/*.*`,
    svgicons: `${srcFolder}/assets/icons/*.svg`,
    fonts: `${srcFolder}/assets/fonts`,
  },
  watch: {
    js: `${srcFolder}/assets/js/**/*.js`,
    images: `${srcFolder}/assets/**/*.{jpg,jpeg,png,gif,webp,svg}`,
    scss: `${srcFolder}/assets/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/assets/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder
}