module.exports = (app) => {

    var mailVerifyDelegate = require('./../models/MailVerify/mailVerifyDelegate');

    app.route('/api/user/verify/:hash');
}