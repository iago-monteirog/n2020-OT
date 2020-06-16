module.exports = {
    "development": {
        dialect: "mysql",
        host: "localhost",
        username: "root",
        password: "123456",
        database: "n2020-ot",
        define: {
            timestamps: false,
            underscored: false,
        }
    },

    "production": {
        dialect: "mysql",
        host: "us-cdbr-east-05.cleardb.net",
        username: "b708c3ad6388b7",
        password: "9a33a6ae",
        database: "heroku_2458ec383120ab7",
        define: {
            timestamps: false,
            underscored: false,
        }
    }
}