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
                date : date.split('-').reverse().join('-')
            }
        })
        .then(() => this.read())
    },
    update: function(id, {concept, mount, date, type}) {
        let atributesToUpdate = {};
        if (concept) atributesToUpdate.concept = concept;
        if (mount) atributesToUpdate.mount = mount;
        if (date) atributesToUpdate.date = date;
        atributesToUpdate.type = type;
        const productPromise = Operation.update(
            atributesToUpdate,
            { 
                where: { 
                    id
                }
            }
        )
        .then(() => Operation.findByPk(id))
        return productPromise
        .then(() => this.read())
    },

    delete: function(id) {
        return Operation.destroy({
            where: {
                id
            }
        })
        .then(() => this.read())
    },    
}