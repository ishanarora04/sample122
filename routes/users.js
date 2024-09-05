var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const numbers = req.body;

  // Validate the input data
  if (!Array.isArray(numbers) || numbers.some(num => typeof num !== 'number')) {
    return res.status(400).json({ error: 'Invalid input: Expected an array of int32 numbers' });
  }

  // Calculate the sum of the int32 numbers
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  // Return the result as a number
  res.json({ result: sum });

});

module.exports = router;
