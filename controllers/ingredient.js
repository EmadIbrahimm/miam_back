const express = require('express');

const router = express.Router();
const app = express();


router.post("/", (req, res) => {   
  console.log('POST /ingredient')
  console.log('POST /ingredient', req.body)

  // Redirect to a Database modification of ingredients ???
});

module.exports = router;