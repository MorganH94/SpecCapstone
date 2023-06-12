const express = require('express');
const journalEntryRoutes = require('./routes/journalEntryRoutes'); // Update the import statement

const app = express();
const PORT = process.env.PORT || 4545;

app.use(express.json());

// Add routes
app.use('/journalEntries', journalEntryRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

