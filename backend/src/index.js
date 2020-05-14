const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://master:masterkey@cluster0-lypz4.mongodb.net/test?retryWrites=true&w=majority',
{
  useNewUrlParser: true, useUnifiedTopology: true,
});

app.use(require('./routes'));

app.listen(3333, () => {
  console.log('Server Started on por 3333');
});