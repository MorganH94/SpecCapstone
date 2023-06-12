import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchJournalEntries } from '../services/api';

function JournalEntryList() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetchEntries();
  }, []);

  async function fetchEntries() {
    try {
      const response = await fetchJournalEntries();
      setEntries(response.data);
    } catch (error) {
      console.error('Error fetching journal entries:', error);
    }
  }

  return (
    <div>
      <h2>Journal Entries</h2>
      {entries.map((entry) => (
        <div key={entry.id}>
          <Link to={`/entry/${entry.id}`}>{entry.title}</Link>
        </div>
      ))}
      <Link to="/add">Add Entry</Link>
    </div>
  );
}

export default JournalEntryList;
