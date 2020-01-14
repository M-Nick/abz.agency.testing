// vue.config.js
module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? 'https://test-abz-agency-345.herokuapp.com/'
      : '/',
}
