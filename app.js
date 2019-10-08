'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.listen(process.env.PORT || 9000, () => {
    console.log('..LISTENING ON PORT 9000..');
});

app.use('/images', express.static(path.join(__dirname, '/images')));
app.use('/styles.css', express.static(path.join(__dirname, '/styles.css')));


////////////////////////////////////////////////////////////////////

app.get('/', (req,res) => { //HOME PAGE
    res.sendFile(path.join(__dirname, 'index.html'));
});
 
app.get('/about.html', (req,res) => { //ABOUT PAGE
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/blog.html', (req,res) => { //BLOG PAGE
    res.sendFile(path.join(__dirname, 'blog.html'));
});

app.get('/contact.html', (req,res) => { //CONTACT PAGE
    res.sendFile(path.join(__dirname, 'contact.html'));
});
