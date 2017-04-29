const express = require('express');
const router = express.Router();
const players = require('../data/players');

router.get('/', function(req, res) {
  res.send(players);
});

module.exports = router;


