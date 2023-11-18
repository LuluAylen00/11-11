module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "pan_db",
    "host": "127.0.0.1", // 127.0.0.1 == localhost
    "dialect": "mysql",
    //"port": 3306
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
