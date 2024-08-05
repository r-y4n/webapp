const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Image = require('./db');
const { GridFSBucket } = require('mongodb');
const mongoose = require('mongoose');

// Initialize GridFS
const conn = mongoose.connection;
const bucket = new GridFSBucket(conn.db, {
  bucketName: 'uploads'
});

// Configure multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create a new image
router.post('/images', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    const { originalname, buffer } = req.file;
    const uploadStream = bucket.openUploadStream(originalname, {
      contentType: req.file.mimetype
    });
    uploadStream.end(buffer);

    uploadStream.on('finish', () => {
      res.status(201).send({ message: 'File uploaded successfully!' });
    });

    uploadStream.on('error', (error) => {
      res.status(500).send({ error: 'Upload failed' });
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get all images
router.get('/images', async (req, res) => {
  try {
    const files = await bucket.find().toArray();
    res.status(200).send(files);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

// Get a single image by filename
router.get('/images/:filename', async (req, res) => {
  try {
    const { filename } = req.params;
    const downloadStream = bucket.openDownloadStreamByName(filename);

    downloadStream.on('data', (chunk) => {
      res.write(chunk);
    });

    downloadStream.on('end', () => {
      res.end();
    });

    downloadStream.on('error', () => {
      res.status(404).send('File not found');
    });
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

module.exports = router;
