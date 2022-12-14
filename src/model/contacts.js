const mongoose = require('mongoose');


// Contact mode
const Contact = mongoose.model('Contact',{
    contactList: { type: Array }
});

module.exports = Contact;