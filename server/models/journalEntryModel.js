const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

const JournalEntry = db.define('JournalEntry', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = JournalEntry;
