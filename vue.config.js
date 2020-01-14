// vue.config.js
module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production'
      ? 'https://my-awesome-app-2.herokuapp.com/'
      : '/',
}
