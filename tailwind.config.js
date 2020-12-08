module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home-image': "url('https://www.w3schools.com/w3images/mac.jpg')"
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
