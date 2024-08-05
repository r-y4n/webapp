// api/db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jonesrya001:<Gravityfalls1!!>@cluster0.c6kxeqc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

const imageSchema = new mongoose.Schema({
  url: String,
  description: String,
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
