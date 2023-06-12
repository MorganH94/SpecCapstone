const express = require('express');
const router = express.Router();

// Import the journalEntryController
const journalEntryController = require('../controllers/journalEntryController');

// Define the routes
router.get('/', journalEntryController.getAllEntries);
router.get('/:id', journalEntryController.getEntryById);
router.post('/', journalEntryController.createEntry);
router.put('/:id', journalEntryController.updateEntry);
router.delete('/:id', journalEntryController.deleteEntry);

module.exports = router;
