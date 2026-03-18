const express = require('express');
const router = express.Router();
const { validateContact } = require('../middleware/validation');
 
const contactsController = require('../controllers/contacts');
 
router.get('/', contactsController.getAll);
 
router.get('/:id', contactsController.getSingle);
 
router.post('/', validateContact, contactsController.createContact);
 
router.put('/:id', validateContact, contactsController.updateContact);
 
router.delete('/:id', contactsController.deleteContact);
 
module.exports = router;
