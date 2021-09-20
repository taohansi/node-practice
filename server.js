const http = require('http')

const server = http.createServer((req, res) => {
  const {url, method} = req  
  if (url === '/hello' && method === 'GET') {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end('hello world\n')
    } else if (url === '/json' && method === 'GET') {
      res.writeHead(200, {'Content-Type':'application/json'})
      res.end(JSON.stringify({data : 'json'}))
    }
    
  })
  
  server.listen(3000, () => {
    console.log('server start')
  })