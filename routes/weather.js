let express = require('express');
let router = express.Router();
let path = require('path');

router.route('/get')

    .get((req, res) => {
        res.sendFile(path.join(__dirname, '../views', 'weather.html'));
    });

module.exports = router;