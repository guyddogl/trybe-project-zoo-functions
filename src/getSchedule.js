const data = require('../data/zoo_data');

const {species} = data;

const isValidAnimal = (animal) => species.some((animalName) => animalName.name === animal);

function getSchedule(scheduleTarget) {
  
}

console.log(getSchedule('lions'));

module.exports = getSchedule;
