import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { createComment } from '../services/api';

function CommentForm() {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    const commentData = {
      entryId: id,
      content,
    };

    try {
      await createComment(commentData);
      history.push(`/entry/${id}`);
    } catch (error) {
      console.error('Error creating comment:', error);
    }
  }

  return (
    <div>
      <h2>Add Comment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Comment:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentForm;
