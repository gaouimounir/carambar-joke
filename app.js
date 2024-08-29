const express = require('express');
const bodyParser = require('body-parser');
const jokeRoutes = require('./routes/jokeRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', jokeRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
