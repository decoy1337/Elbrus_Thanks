const { Genre, Movie } = require('../../db/models');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const genres = await Genre.findAll({ include: Movie });

    res.status(200).json({ message: 'success', genres });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/:genreId', async (req, res) => {
  try {
    const { genreId } = req.params;

    const genre = await Genre.findOne({
      where: { id: genreId },
      include: Movie,
    });

    res.status(200).json({ genre });
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title } = req.body;
    const genre = await Genre.create({ title });
    res.status(201).json({ genre });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.put('/:genreId', async (req, res) => {
  try {
    const { genreId } = req.params;

    const { title } = req.body;

    const result = await Genre.update({ title }, { where: { id: genreId } });

    if (result[0]) {
      res.status(200).json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.delete('/:genreId', async (req, res) => {
  try {
    const { genreId } = req.params;

    const result = await Genre.destroy({ where: { id: genreId } });

    if (result) {
      res.status(200).json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
