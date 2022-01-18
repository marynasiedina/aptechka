const express = require('express');
const cors = require('cors');
const app = express();

const users = []

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  let user = req.body
  users.find(e => {
    e.emailPhone === user.emailPhone ? res.send('true') : res.send(`user doesn't exist`);
  })
});

app.post('/register', (req, res) => {
  let newUser = req.body
  users.push(newUser)
  console.log(users)
  res.status(201).json({
    status: 'created',
    msg: `user has been created`
  })
})

app.listen(8080, () => console.log('API is running on http://localhost:8080'));