const knex = {
    client: "mysql",
    connection: {
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPWD,
        database: process.env.DBNAME,
        charset: 'utf8'
    },
    debug: true
}

module.exports = knex;