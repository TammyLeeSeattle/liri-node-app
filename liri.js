// SETUP
// ========================================================

    // .env file, which enables Spotify access
    require("dotenv").config();
    var keys = require("./keys.js");
    var spotify = new Spotify(keys.spotify);


// GET PACKAGES
// ========================================================

    // Spotify -- get music info
    var spotify = require('node-spotify-api');

    // Axios -- get data from the OMDB API and the Bands In Town API
    var axios = require("axios");

    // Moment -- library to help convert time
    var moment = require("moment");

    // fs Node package for "do-what-it-says" command
    var fs = require("fs");

// USER ENGAGEMENT OF THE APP (global variables)
// ========================================================

    /* 
    FROM ASSIGNMENT: These are the possible commands from the user --
        • concert-this <artist/band name here>
        • spotify-this-song '<song name here>'
        • movie-this '<movie name here>'
        • do-what-it-says
    */

    // anything that the user puts in the bash command line
    var userNodeInput = process.argv;

    // any of the four 'commands' (above) that the user can use OR anything not recognized as one of the four
    var userCommand = process.argv[2];

    // the potential user inputs '<>' -- could be null or could be searchable in the APIs
    var userInput = '';


// FUNCTIONS
// =================================================================================
    
    // findConcert function

    // findSong function
    function findSong (input) {
        spotify
            .search ({ type: 'track', query: input})
            .then (function (response) {
                console.log(response);
                })
            .catch(function(err) {
                console.log(err);
                });
    }



    // findMovie function

    // doTheThing function



// CONVERT COMMAND + USER INPUT TO LIRI.JS
// =================================================================================

    // Use Switch to convert value input
    var runLiri = function (command, userInput) {
        switch (command) {
            case 'concert-this':
                findConcert(userInput);
                break;

            case 'spotify-this-song':
                findSong(userInput);
                break;

            case 'movie-this':
                findMovie(userInput);
                break;

            case 'do-what-it-says':
                doTheThing(userInput);
                break;

            default:
                console.log("LIRI does not know this command. LIRI does understand 'concert-this', 'spotify-this-song', 'movie-this' and 'do-what-it-says");
        }
    }

// RUN THE PROGRAM WHEN CALLED
// =================================================================================

    runLiri(userCommand, userInput);