const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './views/index.html')));

app.get('/detalle-producto', (req, res) => res.sendFile(path.join(__dirname, './views/productDetail.html')));

app.get('/carrito-de-compras', (req, res) => res.sendFile(path.join(__dirname, './views/productCart.html')));

app.get('/registro-ingreso', (req, res) => res.sendFile(path.join(__dirname, './views/register.html')));

app.listen(3000, () => console.log('El servidor está corriendo en el puerto 3000'));