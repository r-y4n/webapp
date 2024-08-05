const express = require('express');
const cors = require('cors');
const app = express();
const imagesRouter = require('./images');

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS
app.use('/api', imagesRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
