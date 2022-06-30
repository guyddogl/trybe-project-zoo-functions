const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;
const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const isValidAnimal = (animal) => species.some((animalName) => animalName.name === animal);

const getOpeningHours = (day) => {
  const officeHour = {};
  if (day === 'Monday') {
    officeHour.officeHour = 'CLOSED';
    return officeHour;
  }
  const { open, close } = hours[day];
  officeHour.officeHour = `Open from ${open}am until ${close}pm`;
  return officeHour;
};

const getOpeningDays = () => {
  const schedule = {};
  weekDays.forEach((day) => {
    schedule[day] = getOpeningHours(day);
  });
  return schedule;
};
console.log(getOpeningDays());

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return console.log(weekDays);
  }
  if (isValidAnimal) return species.find((animal) => animal.name === scheduleTarget).availability;
}

// console.log(getSchedule('penguins'));
// console.log(getSchedule());

module.exports = getSchedule;
