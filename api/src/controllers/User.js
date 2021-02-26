const { Operation } = require('../db.js');
const User = require('../models/User.js');

module.exports = {
    login: function(){
        return User.findOne({
            attributes: ['id', 'email', 'password', 'name'],
            where: { email },
            include: [{
                attributes: ['name']
            }, {
                model:Image,
                attributes: ['url']
            }]
        })
        .then(user => this.matchPassword(user, password))
        .then(this.checkBan)
        .then(this.session)
    },
    register: function ({ email, name, password}) {
        return User.findOne({
            attributes: ['id'],
            where: { email }
        })
        .then(user => {
            if (user) throw `User ${email} already exists`
            return User.create({ name, email, password})
        })
        .then(user => this.getById(user.id))
    },
    changePassword: function(id, oldPassword, newPassword){
        return User.findByPk(id)
        .then(user => this.matchPassword(user, oldPassword))
        .then(user => user.update({password: newPassword}))
        .then(() => 'success')
    },
    logingProvider: function (provider, providerId, name, email) {
        return User.findOne({where:{email}})
        .then(user => {
            if (!user) return User.create({ email, name, rolId: 3, [provider + 'Id']: providerId})
            return user.update({[provider + 'Id']: providerId})
        })
        .then(this.checkBan)
        .then(this.session)
    },
}