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
        connection: process.env.CLEARDB_DATABASE_URL,
    }
}