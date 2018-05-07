let express = require('express');
let router = express.Router();

router.get('/images', (req, res) => {
    res.json({ message: "First API!"});
});

module.exports = router;