const express = require('express'),
     app = express(),
     port = process.env.port || 9000;

app.use(express.static(__dirname + '/'));
app.listen(port, () => console.log('Site up on localhost: ', port));