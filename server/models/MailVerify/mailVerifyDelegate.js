const mongoose = require('mongoose');

var MailVerify = mongoose.model('MailVerify');

exports._sendMailVerification = (email, userId) => {

    // Create random hash
    // Build link to verification endPoint 
    // Build E-mail message
    // Send e-mail
    // Save hash and userId on db
}

exports.verifyUserEmail = (req, res) => {

    // get hash from params
    // query db for hash in the collection
    // if hash exists, fetch user in User collection and set isVerified to true.
}