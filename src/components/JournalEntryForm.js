import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createJournalEntry } from '../services/api';

function JournalEntryForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    const journalEntryData = {
      title,
      content,
    };

    try {
      await createJournalEntry(journalEntryData);
      history.push('/');
    } catch (error) {
      console.error('Error creating journal entry:', error);
    }
  }

  return (
    <div>
      <h2>Add Journal Entry</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default JournalEntryForm;
