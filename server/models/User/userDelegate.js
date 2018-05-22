const mongoose = require('mongoose');

//var mailVerifyDelegate = require('../MailVerify/mailVerifyDelegate');

var User = mongoose.model('User');
// Import email-verification Delegate


exports.listAllUsers = (req, res) => {

    User.find({}, (err, users) => {

        if(err) {
            res.send(err);
        } else {
            var userList = [];
            users.forEach((user) => {
                var resObj = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                }

                userList.push(resObj);
            });

            res.send({users: userList});
        } 
    });
}

exports.createUser = (req, res) => {

    var newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save().then((user) => {
        
        // Call method to send verification mail to newly created user
        const sendMailVerification = require('../MailVerify/mailVerifyDelegate').sendMailVerification;
        sendMailVerification(user.email, user._id);

        res.send({
            result: {
                newUser: `${user.firstName} ${user.lastName} created!`
            }
        });
    }, (e) => {
        res.status(400).send(e);
    });
}
