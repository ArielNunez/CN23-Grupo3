const express = require('express');
const app = express();
const path = require('path');

const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', mainRouter);
app.use('/productos', productsRouter);
app.use('/usuario', usersRouter);

app.listen(process.env.PORT || 3000, function() {
    console.log(`Servidor corriendo en el puerto 3000`) 

})