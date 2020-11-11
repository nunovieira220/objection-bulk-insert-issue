module.exports = {
  database: {
    client: 'postgresql',
    connection: {
      database: 'playground_db',
      host: 'localhost',
      password: 'playground_pw',
      user: 'playground_user'
    },
    migrations: { tableName: 'migrations' }
  }
}