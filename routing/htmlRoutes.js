const path = require('path');
module.exports = function (dir, app) {


    app.get("/", function (req, res) {
        res.sendFile(path.join(dir, "/app/public/home.html"));
    });

    // This file will be read in once it determines the clients name, must be packahged in a way that it can account for my variable.   
    //Dir name is joined with the path name, but the  require statement will control for how my data is read in.
    //Create function which runs in the file
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(dir, "/app/public/survey.html"));
    });
};

// in theory require this wil  read in app.get and bring in file.
