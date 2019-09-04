var connection = require('./connection.js');

var orm = {
    selectAll: function(cb) {
        connection.query('SELECT * FROM burgers', (err,results) => {
            if (err) throw err;
            cb(results);
        });
    },

    insertOne: function(val,cb) {
        connection.query('INSERT INTO burgers (burger_name)', (err,result) => {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(id,vals,cb) {
        connection.query('UPDATE burgers SET burger_name=?, devoured=? WHERE id=?', vals, (err,result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;