const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => { res.send('I am login file')})
router.get('/register', (req, res) => { res.send('I am register file')})

module.exports = router