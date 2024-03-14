const { where, json } = require('sequelize');
const { Student } = require('../../db/models');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll();

    res.status(200).json({ students });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});



module.exports = router;
