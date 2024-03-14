const { where, json } = require("sequelize");
const { Student } = require("../../db/models");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const students = await Student.findAll();

    res.status(200).json({ students });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post("/", async (req, res) => {
  let student;
  try {
    const { name, phase, count_thank } = req.body;
    student = await Student.findOne({ where: { name, phase, count_thank } });
    console.log(student);
    if (student) {
      res.status(400).json({ message: "Такой студент уже существует" });
      return;
    }

    student = await Student.create({
      name,
      phase,
      count_thank,
    });
    if (student) {
      student = await Student.findOne({
        where: { id: student.id },
      });
      res.status(201).json({ message: "success", student });
    }
    res.status(400).json();
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { thanks } = req.body;
    await Student.update({ count_thank: thanks }, { where: { id } });
    const student = await Student.findOne({ where: { id } });
    res.json({ message: "success", student });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
