"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const students = [
      {
        name: "Иван Шлыков",
        phase: "1",
        count_thank: 0,
      },
      {
        name: "Иван Дибров",
        phase: "1",
        count_thank: 0,
      },
      {
        name: "Канат Турганбаев",
        phase: "1",
        count_thank: 0,
      },
      {
        name: "Илья Гуляев",
        phase: "1",
        count_thank: 0,
      },
      {
        name: "Павел Васильев",
        phase: "1",
        count_thank: 0,
      },
      {
        name: "Евгений Пигорев",
        phase: "2",
        count_thank: 0,
      },
      {
        name: "Анастасия Кесян",
        phase: "2",
        count_thank: 0,
      },
      {
        name: "Абубакар Хулаев",
        phase: "2",
        count_thank: 0,
      },
      {
        name: "Мансур Баймурзаев",
        phase: "2",
        count_thank: 0,
      },
      {
        name: "Екатерина Лопарева",
        phase: "2",
        count_thank: 0,
      },
      {
        name: "Владислав Овсянников",
        phase: "2",
        count_thank: 0,
      },
      {
        name: "Данил Клинков",
        phase: "2",
        count_thank: 0,
      },
      {
        name: "Валерий Паришкура",
        phase: "2",
        count_thank: 0,
      },
      {
        name: "Александр Залуцкий",
        phase: "2",
        count_thank: 0,
      },
      {
        name: "Дмитрий Лебедев",
        phase: "2",
        count_thank: 0,
      },
      {
        name: "Алена Игнатьева",
        phase: "2",
        count_thank: 0,
      },
      {
        name: "Никита Кобяков",
        phase: "2",
        count_thank: 0,
      },
      {
        name: "Константин Кавка",
        phase: "2",
        count_thank: 0,
      },
      {
        name: "Мария Бакир",
        phase: "2",
        count_thank: 0,
      },
      {
        name: "Камил Данияр",
        phase: "2",
        count_thank: 0,
      },
      {
        name: "Жора Арзуманов",
        phase: "2",
        count_thank: 0,
      },
      {
        name: "Александр Сальков",
        phase: "3",
        count_thank: 0,
      },
      {
        name: "Алина Сорокина",
        phase: "3",
        count_thank: 0,
      },
      {
        name: "Иван Жуков",
        phase: "3",
        count_thank: 0,
      },
      {
        name: "Семен Королев",
        phase: "3",
        count_thank: 0,
      },
      {
        name: "Владимир Захарченко",
        phase: "3",
        count_thank: 0,
      },
      {
        name: "Чингиз Галимов",
        phase: "3",
        count_thank: 0,
      },
      {
        name: "Аюр Галсанов",
        phase: "3",
        count_thank: 0,
      },
      {
        name: "Константин Маймула",
        phase: "3",
        count_thank: 0,
      },
      {
        name: "Марк Чепалов",
        phase: "3",
        count_thank: 0,
      },
      {
        name: "Вадимка Безобразов",
        phase: "3",
        count_thank: 0,
      },
      {
        name: "Лиана Пагосова",
        phase: "3",
        count_thank: 0,
      },
    ];
    const Students = students.map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Students", Students);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Students");
  },
};
