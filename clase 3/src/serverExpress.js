const express = require('express');
const fs = require('fs');
const Contenedor = require ('./Contenedor.js')

const app = express();

const productos = new Contenedor ('./productos.txt')

app.get('/', (req, res) => {
    res.send(`
        <div>
        <ul>
            <li><a href='/productos'>/productos</a></li>
            <li><a href='/productos'>/productosRandom</a></li>
        </ul>
        </div>`

    );
})

app.get('/productos', async (req, res) => {
    const prods = await productos.getAll()
    res.send(prods);
})


app.get('/productoRandom', async (req, res) => {
    const prods = await productos.getAll()
    const random = parseInt(Math.random()*prods.length)
    res.send(prods[random]);
})


const PORT = 8080;

const server = app.listen (PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}/`);

});

server.on("error", (error) => console.log(error));

