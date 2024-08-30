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



const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Carambar Jokes API',
            version: '1.0.0',
            description: 'API pour gérer les blagues Carambar'
        }
    },
    apis: ['./routes/*.js'], // Path vers vos fichiers de routes
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



app.get('/test', (req, res) => {
    res.status(200).json({ message: 'Server is running' });
  });
  
