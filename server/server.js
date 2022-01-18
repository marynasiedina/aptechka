const express = require('express');
const cors = require('cors');
const app = express();

const users = []

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  let user = req.body
  let exist = users.filter(e => e.emailPhone === user.emailPhone)

  if (exist.length > 0) {
    res.status(200).json({ status: 'true' })
  }
  else res.status(503).json({ status: 'false' })
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