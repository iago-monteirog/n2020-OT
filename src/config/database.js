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
    "username": "b70bb72ec449ee",
    "password": "2b327bf6",
    "database": "heroku_b73f9900251b5df",
    "host": "us-cdbr-east-05.cleardb.net",
    "dialect": "mysql",
    "define": {
      "timestamps": false,
      "underscored": false,
  }
  }
}
