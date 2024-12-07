const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/total-distance', (req, res) => {
  res.send(
    (
      parseFloat(req.query.distance1) + parseFloat(req.query.distance2)
    ).toString()
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
