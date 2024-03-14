const { where, json } = require('sequelize');
const { Movie, Genre } = require('../../db/models');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const movies = await Movie.findAll({ include: Genre });

    res.status(200).json({ movies });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/:movieId', async (req, res) => {
  try {
    const { movieId } = req.params;

    const movie = await Movie.findOne({ where: { id: movieId } });

    res.status(200).json({ movie });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post('/', async (req, res) => {
  let movie;
  try {
    const { title, yearOfRealese, rating, director, genreId } = req.body;
    movie = await Movie.findOne({ where: { title, director } });
    console.log(movie);
    if (movie) {
      res.status(400).json({ message: 'Такой фильм уже существует' });
      return;
    }

    movie = await Movie.create({
      title,
      yearOfRealese,
      rating,
      director,
      genreId,
    });

    if (movie) {
      movie = await Movie.findOne({ where: { id: movie.id }, include: Genre });
      res.status(201).json({ message: 'success', movie });
    }
    res.status(400).json();
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.put('/:movieId', async (req, res) => {
  try {
    const { movieId } = req.params;
    const { title, yearOfRealese, rating, director, genreId } = req.body;
    const result = await Movie.update(
      { title, yearOfRealese, rating, director },
      { where: { id: movieId } }
    );
    if (result[0]) {
      const movie = await Movie.findOne({ where: { id: movieId } });
      res.status(200).json({ message: 'success', movie });
      return;
    }
    res.status(400).json({ message: 'error' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.delete('/:movieId', async (req, res) => {
  try {
    const { movieId } = req.params;

    const result = await Movie.destroy({ where: { id: movieId } });

    if (result) {
      res.status(200).json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
