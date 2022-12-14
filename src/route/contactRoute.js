const express = require("express");
const {saveContacts} = require('../controller/contactController')
const router = express.Router();

router.post('/contacts',saveContacts);

module.exports =  router;
