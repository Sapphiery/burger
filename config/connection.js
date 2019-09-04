var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'nodeuser',
    password: '',
    database: 'burgers_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log("Connected as id: " + connection.threadId);
});

module.exports = connection;