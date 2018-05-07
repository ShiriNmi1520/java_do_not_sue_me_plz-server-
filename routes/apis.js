let express = require('express');
let router = express.Router();

router.route('/images/:id')

    .get((req, res) => {
        res.json({
            id: req.params.id,
            message: "[Get] Api for image: " + req.params.id
        });

    })

    .post((req, res) => {
        res.json({
            id: req.params.id,
            message: "[Post] Api for image: " + req.params.id
        })
    })

    .put((req, res) => {
        res.json({
            id: req.params.id,
            message: "[Put] Api for image: " + req.params.id
        })
    })

    .delete((req, res) => {
        res.json({
            id: req.params.id,
            message: "[Delete] Api for image: " + req.params.id
        })
    });

router.route('/images/write/:id')

    .get((req, res) => {
        let id = req.params.id,
            message = "Welcome: " + id;
        res.send(message);
    });

router.get('/images', (req, res) => {
    res.json({message: "First API!"});
});

module.exports = router;