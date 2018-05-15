const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var verification = new Schema({
   verif_hash: {
       type: String,
       required: true
   },
   userId: {
       type: String,
       required: true
   }
});

module.exports = mongoose.model('MailVerify', verification);