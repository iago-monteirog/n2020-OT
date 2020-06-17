module.exports = {
  "development": {
    "username": "root",
    "password": "123456",
    "database": "n2020-ot",
    "host": "localhost",
    "dialect": "mysql",
    "define": {
      "timestamps": false,
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
    "username": "bfb5c248e2d3fd",
    "password": "989674ce",
    "database": "heroku_2a34f30e84faf1a",
    "host": "us-cdbr-east-05.cleardb.net",
    "dialect": "mysql",
    "define": {
      "timestamps": false,
      "underscored": false,
  }
  }
}
