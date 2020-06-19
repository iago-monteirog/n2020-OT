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
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "define": {
      "timestamps": false,
      "underscored": false,
  }
  }
}
