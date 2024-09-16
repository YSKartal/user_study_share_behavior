const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser')
 
var dt = require('./writer');
var jsonParser = bodyParser.json()
 
const app = express();
app.use(cors());
app.use(express.json());
const port = 3001; // or any other port you prefer

app.get('/api/data', (req, res) => {
  // Handle your API logic here
  const data = { message: 'Hello from the server!' };
  res.json(data);
});

app.post('/register', jsonParser , function (req, res)  {
  
  //dt.writer(req.body.fname);
  dt.writer(JSON.stringify(req.body));
  res.json({
    status: 200,
    message: "Got a succesfull POST request and I can do another if I'd like"
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});        