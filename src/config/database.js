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
        username: "b70bb72ec449ee",
        password: "2b327bf6",
        database: "heroku_b73f9900251b5df",
        define: {
            timestamps: false,
            underscored: false,
        }
    }
}