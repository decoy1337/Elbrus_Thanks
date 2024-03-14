const express = require('express');
const router = express.Router();

const apiAuthRouter = require('./api/api.auth.routes');
const apiGenreRouter = require('./api/api.genre.routes');
const apiMovieRouter = require('./api/api.movie.router');

router.use('/api/auth', apiAuthRouter);
router.use('/api/genres', apiGenreRouter);
router.use('/api/movies', apiMovieRouter);

module.exports = router;
