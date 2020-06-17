module.exports = {
  "development": {
    "username": "root",
    "password": "123456",
    "database": "n2020-ot",
    "host": "localhost",
    "dialect": "mysql",
    "define": {
      "timestamps": true,
      "underscored": false,
  }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },

  "production": {
    "username": "b60e841c328326",
    "password": "8bc3feee",
    "database": "heroku_41cbdf257052fae",
    "host": "us-cdbr-east-05.cleardb.net",
    "dialect": "mysql",
    "define": {
      "timestamps": false,
      "underscored": false,
  }
  }
}
