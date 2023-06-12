import React from 'react';

const JournalEntry = ({ entry }) => {
  return (
    <div className="journal-entry">
      <h3>{entry.title}</h3>
      <p>{entry.content}</p>
    </div>
  );
};

export default JournalEntry;
