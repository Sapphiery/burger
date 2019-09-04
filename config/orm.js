var connection = require('./connection.js');

var orm = {
    selectAll: function(table, cb) {
        connection.query('SELECT * FROM ?', [table], (err,results) => {
            if (err) throw err;
            cb(results);
        });
    },

    insertOne: function(table,cols,vals,cb) {
        let wildcards = [table];
        let queryCols = '';
        let queryVals = '';
        for (let i = 0; i < cols.length; i++) {
            wildcards.push(cols[i]);
            queryCols += '??';
        }
        for (let i = 0; i < vals.length; i++) {
            wildcards.push(vals[i]);
            queryVals += '?';
        }
        connection.query(`INSERT INTO ?? (${queryCols}) VALUES (${queryVals})`, wildcards, (err,result) => {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(table,cols,vals,id,cb) {
        let wildcards = [table];
        let queryString = [];
        for(let i = 0; i < cols.length; i++) {
            wildcards.push(cols[i]);
            wildcards.push(vals[i]);
            queryString.push('??=?');
        }
        wildcards.push(id);
        connection.query(`UPDATE ?? SET ${queryString.toString()} WHERE id=?`, wildcards, (err,result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;