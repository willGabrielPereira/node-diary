var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
    res.json('index api')
})
// define the about route
router.get('/about', function (req, res) {
    res.json('About api')
})

module.exports = router
