
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World 🔥🔥🔥');
});

app.get('/:message', (req, res) => {
    const message = req.params.message;
    res.send(message + ' 🔥🔥🔥');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
