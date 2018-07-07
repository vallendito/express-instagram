// Grab Express and // Create an Express App
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();


// CONFIGURE THE APP
// ==================================================
// tell node where to look for site resources

app.use(express.static(__dirname + '/public/css'));

// set the view engine to ejs 
app.set('view engine', 'ejs');

// configure instagram app with your access token

ig.use({
    access_token: '3928246165.1677ed0.044eff8bc0574f178e0b5e8fe8bc906a',
});

// SET THE ROUTES
// ===================================================
// home page route - our profile's images

app.get('/', function(req,res){
// use the instagram package to get our profile's media
    ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {
        // render the home page and pass in our profile's images
        res.render('pages/index', { grams: medias });
    });  
});

// Start the server on port 8080
app.listen(8080);
// send a message
console.log('App started! Look at http://localhost:8080');
