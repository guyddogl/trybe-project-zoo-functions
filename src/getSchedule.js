const data = require('../data/zoo_data');

const { species } = data;
// const weekDays = ['Tuesday', 'Wednesday', 'Sunday', 'Saturday'];

const isValidAnimal = (animal) => species.some((animalName) => animalName.name === animal);

function getSchedule(scheduleTarget) {
  if (isValidAnimal) return species.find((animal) => animal.name === scheduleTarget).availability;
}

// console.log(getSchedule('lions'));
// console.log(getSchedule());

module.exports = getSchedule;
