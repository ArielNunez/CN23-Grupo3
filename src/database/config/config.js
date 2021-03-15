require('dotenv').config();

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "229282",
    "password": "Galileo2450",
    "database": "santiagobullrich_championes",
    "host": "mysql-santiagobullrich.alwaysdata.net",
    "dialect": "mysql"
  }
}
