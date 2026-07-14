const http = require('http')

const server = http.createServer((req, res) => {
if(req.url === '/'){
  res.end('Home Page')
}
if(req.url === '/about'){
  // BLOCKING CODE
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 1000; i++) {
      console.log(`${i} ${j}`)
    }
  }
}
 res.end('Error Page')
});

server.listen(5400, () => {
  console.log('Server listening on port 5400...')
})