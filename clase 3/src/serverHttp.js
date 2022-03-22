const http = require('http')

const server = http.createServer((req, res) =>{
    res.end('Hola servidor http')
})

const PORT = 3000
const connectedServer = server.listen (PORT, () =>{
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`)
})