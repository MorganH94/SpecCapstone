const JournalEntry = require('../models/journalEntryModel');

// Controller actions
const getAllJournalEntries = async (req, res) => {
  try {
    const journalEntries = await models.JournalEntry.findAll();
    res.json(journalEntries);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch journal entries' });
  }
};

const createJournalEntry = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newJournalEntry = await models.JournalEntry.create({ title, content });
    res.status(201).json(newJournalEntry);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create journal entry' });
  }
};

module.exports = {
  getAllJournalEntries,
  createJournalEntry,
};
