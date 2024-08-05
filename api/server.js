// api/server.js
const express = require('express');
const app = express();
const imagesRouter = require('./images');

app.use(express.json());
app.use('/api', imagesRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
