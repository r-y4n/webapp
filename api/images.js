const express = require('express');
const router = express.Router();
const Image = require('./db');

// Create a new image
router.post('/images', async (req, res) => {
  try {
    const newImage = new Image(req.body);
    await newImage.save();
    res.status(201).send(newImage);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all images
router.get('/images', async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).send(images);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
