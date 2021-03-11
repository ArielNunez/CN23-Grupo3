const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors')
var SequelizeStore = require("connect-session-sequelize")(session.Store);

const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');
const apiProductsRouter = require('./routes/api/products');
const apiUsersRouter = require('./routes/api/users')

const loggedMiddleware = require('./middlewares/loggedMiddleware');
const rememberMiddleware = require('./middlewares/rememberMiddleware');
const { sequelize } = require('./database/models');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(cors())
app.use(session({secret: 'ChampionesSecreto'}));
app.use(loggedMiddleware);
app.use(rememberMiddleware);

app.use('/', mainRouter);
app.use('/productos', productsRouter);
app.use('/usuarios', usersRouter);
app.use('/admin', adminRouter);
app.use('/api/productos', apiProductsRouter);
app.use('/api/usuarios', apiUsersRouter);

app.listen(process.env.PORT || 3001, function() {
    console.log(`Servidor corriendo en el puerto 3001`) 
    console.log('http://localhost:3001')
})