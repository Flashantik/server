const app = require('./app')

// Import and Set Nuxt.js options
const config = {
  dev: true
}

require('dns').lookup(require('os').hostname(), function (_err, add, fam) {
  const localIp = add

  let host
  let port

  // config.dev = !(process.env.NODE_ENV === 'production')
  // if (config.dev) {
  //   host = process.env.HOST || localIp
  //   port = processs.env.PORT || 8080
  // } else {
    host = process.env.HOST || 'localhost'
    port = process.env.PORT || 8080
  // }s
  async function start () {
    // Listen the server
    app.listen(port, host)
    console.log(`Server listening on http://${host}:${port}`)
  }
  start()
})
