const mongoose = require('mongoose');
const uuid = require('uuid/v4');

const MailVerify = mongoose.model('MailVerify');

exports.sendMailVerification = (email, userId) => {

    // Create random hash
    const verifHash = uuid();
    // Build link to verification endPoint
    const verifUrl = `https://localhost:3000/api/user/verify/${verifHash}`;  
    // Save hash and userId on db
    let verification = new MailVerify({
        verif_hash: verifHash,
        userId: userId
    });

    verification.save().then((verif) => {
        // Build E-mail message
        // Send e-mail
    });
}

exports.verifyUserEmail = (req, res) => {

    // get hash from params
    // query db for hash in the collection
    // if hash exists, fetch user in User collection and set isVerified to true.
}