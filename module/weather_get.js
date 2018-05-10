let request = require('request');

let site = `http://opendata.epa.gov.tw/ws/Data/UV/?$orderby=PublishAgency&$skip=0&$top=1000&format=json`;

request(site, (err, response, body) => {
    if(err){
        console.log("Fail to fetch data from site!");
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
        // console.log(message);
    }
});