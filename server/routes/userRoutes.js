module.exports = (app) => {

    var userDelegate = require('./../models/User/userDelegate');

    app.route('/api/user')
        .get(userDelegate.listAllUsers)
        .post(userDelegate.createUser)
}