const BASE_URL = 'http://localhost:4545';

export async function fetchJournalEntries() {
  const response = await fetch(`${BASE_URL}/api/entries`);
  return response.json();
}

export async function createJournalEntry(entryData) {
  const response = await fetch(`${BASE_URL}/api/entries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(entryData),
  });
  return response.json();
}

export async function fetchCommentsByEntryId(entryId) {
  const response = await fetch(`${BASE_URL}/api/entries/${entryId}/comments`);
  return response.json();
}

export async function createComment(commentData) {
  const response = await fetch(`${BASE_URL}/api/entries/${commentData.entryId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentData),
  });
  return response.json();
}
