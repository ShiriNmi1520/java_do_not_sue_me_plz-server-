let express = require('express'),
    app = express();

let userService = require('./module/user_service');

//Create new user
app.get('/user', function(req, res) {

    let newUserEmail = req.headers['user-email'];
    let newUserPass = req.headers['user-pass'];

    userService.addUser(newUserEmail, newUserPass,

        function(error, uid) {

            if (error) {
                return res.status(500).send('Error when creating user');

            } else {
                return res.status(201).send({uid : uid});
            }
        });
});

//Perform authentication
app.get('/login', function(req, res){

    let userEmail = req.headers['user-email'];
    let userPassword = req.headers['user-pass'];

    userService.authenticate(userEmail, userPassword,

        function(error, authData) {

            if (error) {
                return res.status(401).send('Unauthorized');

            } else {
                return res.status(200).send(authData);
            }

        });
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Server started...');
});