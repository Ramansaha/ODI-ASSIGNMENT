const mongoose = require('mongoose');
const Contact = require('../model/contacts'); 


const saveContacts = async (req,res)=>{

        const contactList = req.body.contactList;
    
        // filter contact
        let filteredContact = [];
        await contactList.forEach((val)=>{
                const trimmedContact = (val.replace(/\D/g, '').slice(-10));
                if( !filteredContact.includes(trimmedContact)) 
                    filteredContact.push(trimmedContact)
            })
        // 
    
        const newContact = new Contact({contactList:filteredContact});
        newContact.save((err,savedContact)=>{
            if(err){
                return res.status(500).json({
                    err,
                    success:false
                })
            }
            res.status(201).json({
                success:true,
                savedContact
            })
        });
}


module.exports = {saveContacts};