const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const { User } = require('./models');

app.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.get('/find/:id', async (req, res) => {
  console.log(req.params.id);
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

app.get('/findall', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.put('/update/:id', async(req, res) => {
  let user = await User.findByPk(req.params.id);
  const newUserParams = req.body;
  user = await user.update(newUserParams);
  res.json(user);
});

app.delete('/delete/:id', async (req, res) => {
  let user = await User.findByPk(req.params.id);
  user.destroy({ force: true });
  res.json('User deleted with success!');
});

app.listen(PORT, HOST, () => {
  console.log(`Aplication running on ${HOST}:${PORT}`);
});