const { Comment } = require('../models');

exports.getCommentsByEntryId = async (req, res) => {
  const entryId = req.params.entryId;
  try {
    const comments = await Comment.findAll({ where: { entryId } });
    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createComment = async (req, res) => {
  const { entryId } = req.params;
  try {
    const comment = await Comment.create({
      entryId,
      content: req.body.content,
    });
    res.json(comment);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
