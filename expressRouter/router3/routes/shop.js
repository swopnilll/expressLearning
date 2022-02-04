const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("<h1>Welcome to Home Page");
})

module.exports = router;