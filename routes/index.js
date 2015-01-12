var express = require('express');
var router = express.Router();


// persistence stuff (should be moved)
var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
  date: { type: Date, default: Date.now }
});

var Item = mongoose.model('Item', itemSchema);

// mongoose.connect('mongodb://localhost/counter');
mongoose.connect('dude:dude@troup.mongohq.com:10027/reergymerej');



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.html');
});

router.get('/best', function (req, res) {
  res.jsonp({
    value: 8,
    date: new Date()
  });
});

router.post('/item', function (req, res) {
  var item = new Item();

  item.save(function (err, item) {
    if (err) {
      console.log('ERROR!', err);
    } else {
      res.jsonp(item);
    }
  });
});

module.exports = router;
