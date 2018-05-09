let express = require('express');
let router = express.Router();
let request = require('request');
let os = require('os');
let path = require('path');

//api and website setup
let api = "...";
let data_type = "F-C0032-001";
let site = `http://opendata.epa.gov.tw/ws/Data/UV/?$orderby=PublishAgency&$skip=0&$top=1000&format=json`;

router.route('/get')

    .get((req, res) => {
        res.sendFile(path.join(__dirname, '../views', 'weather.html'));
        request(site, (err, response, body) => {
            if(err){
                res.json({
                    status : false,
                    message : "Cannot fetch data"
                })
            }
            else {
                body = JSON.parse(body);
                let message = "";
                let count = Object.keys(body).length;
                console.log(typeof(body));
                for(let i = 0; i < count; i++){
                    message += JSON.stringify(body[i].County) + JSON.stringify(body[i].SiteName)
                        + JSON.stringify(body[i].UVI) + JSON.stringify(body[i].PublishTime) + os.EOL + "<br>";
                }
            }
        })
    });

module.exports = router;