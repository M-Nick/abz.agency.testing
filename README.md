# abz.agency.testing

Solved testing task of [abz.agency](https://abz.agency/) company

See hosted site in Github Pages: <https://m-nick.github.io/abz.agency.testing/>

## Description

### Technologies, used in project

- Framework: Vue.js
- Css preprocessor: Sass (Scss)
- Customize ESLint
- Html, Css, JS, Webpack, Yarn, Node.js

### Third party libraries (installed with yarn)

- [animate.css](https://github.com/daneden/animate.css) (for making simple animation)
- [inputmask](https://github.com/RobinHerbots/Inputmask) vanilla version (without ~~JQuery~~) (for making type-mask in \<input type="tel"> element)
- [vue-line-clamp](https://github.com/Frondor/vue-line-clamp) (for making ellipses and multiline ellipses in elements if text is too long)

### Every static image was compressed with one of the next

- [JPEG compressor](https://compresspng.com/)
- [SVGO](https://github.com/svg/svgo)

## Project setup

```bash
yarn install
```

### Compiles and hot-reloads for development

```bash
yarn serve
```

### Compiles and minifies for production

```bash
yarn build
```

### Make deploy to `git@github.com:m-nick/abz.agency.testing.git master:gh-pages`

```bash
./build.sh
```
