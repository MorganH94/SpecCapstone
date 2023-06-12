const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

const Comment = db.define('Comment', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Comment;
