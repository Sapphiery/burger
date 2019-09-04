var orm = require('../config/orm.js');

var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers',cb);
    },
    insertOne: function(cols,vals,cb) {
        orm.insertOne('burgers',cols,vals,cb);
    },
    updateOne: function(cols,vals,id,cb) {
        orm.updateOne('burgers',cols,vals,id,cb);
    }
};

module.exports = burger;