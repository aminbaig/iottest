const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ name: 'Amin', data: { id: 1, apname: 'userAP' } });
});

const PORT = 5000;

app.listen(PORT, console.log('Server is running on port 5000'));
