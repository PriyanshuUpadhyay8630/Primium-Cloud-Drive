const express = require('express');
const { MongoClient } = require('mongodb');
const { google } = require('googleapis');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB URI जो आपने कॉपी की थी
const uri = "YOUR_MONGODB_URI_HERE";
const client = new MongoClient(uri);

// Google Drive API की Credentials
const CLIENT_ID = 'YOUR_CLIENT_ID_HERE';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET_HERE';
const REDIRECT_URI = 'YOUR_REDIRECT_URI_HERE';

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

app.get('/', (req, res) => {
    res.send('Cloud Drive Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

