var express = require('express');
var router = express.Router();


// lista todos
router.get('/', function(req, res, next) {
  console.log(req);
  res.send('respond with a resource');
});

// busca por id
router.get('/:id', function(req, res, next) {
  console.log(req);
  res.send('respond with a resource');
});

// inclui
router.post('/', function(req, res, next) {
  console.log(req);
  res.send('respond with a resource');
});

//altera
router.put('/:id', function(req, res, next) {
  console.log(req);
  res.send('respond with a resource');
});



//deleta
router.delete('/:id', function(req, res, next) {
  console.log(req);
  res.send('respond with a resource');
});

module.exports = router;
