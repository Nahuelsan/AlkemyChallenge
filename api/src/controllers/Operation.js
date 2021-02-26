const { Operation } = require('../db.js');

module.exports = {
    read: function(){
        return Operation.findAll({
            attributes: ['id', 'concept', 'mount', 'date', 'type'],
            order: ['date']
        })
    },

    create : function({concept, mount, date, type}){
        return Operation.findOrCreate({
            where: {
                type: type,
                concept: concept,
                mount : mount,
                date : date
            }
        })
        .then(() => this.read())
    }
}