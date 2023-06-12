const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/:entryId/comments', commentController.getCommentsByEntryId);
router.post('/:entryId/comments', commentController.createComment);

module.exports = router;
