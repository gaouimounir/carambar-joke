const { Joke } = require('../models');

exports.addJoke = async (req, res) => {
    try {
        const joke = await Joke.create({ content: req.body.content });
        res.status(201).json(joke);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllJokes = async (req, res) => {
    try {
        const jokes = await Joke.findAll();
        res.status(200).json(jokes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getJokeById = async (req, res) => {
    try {
        const joke = await Joke.findByPk(req.params.id);
        if (joke) {
            res.status(200).json(joke);
        } else {
            res.status(404).json({ error: "Joke not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getRandomJoke = async (req, res) => {
    try {
      const joke = await Joke.findOne({ order: sequelize.random() });
      res.status(200).json(joke);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };