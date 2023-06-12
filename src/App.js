import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import JournalEntryList from './components/JournalEntryList';
import JournalEntryForm from './components/JournalEntryForm';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={JournalEntryList} />
        <Route path="/add" component={JournalEntryForm} />
        <Route path="/entry/:id" component={CommentList} />
        <Route path="/entry/:id/add-comment" component={CommentForm} />
      </div>
    </Router>
  );
}

export default App;
