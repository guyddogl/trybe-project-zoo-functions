const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;
const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const isValidAnimal = (animal) => species.some((animalName) => animalName.name === animal);
const isValidDay = (day) => weekDays.some((weekDay) => weekDay === day);
const isValidParam = (param) => param !== undefined;

const getOpeningHours = (day) => {
  if (day === 'Monday') return 'CLOSED';
  const { open, close } = hours[day];
  return `Open from ${open}am until ${close}pm`;
};

const getAnimalsExhibition = (day) => {
  if (day === 'Monday') return 'The zoo will be closed!';
  return species.filter((animal) => animal.availability.includes(day)).map((e) => e.name);
};

const getOpeningDays = () => {
  const schedule = {};
  weekDays.forEach((day) => {
    const objSchedule = {
      officeHour: getOpeningHours(day),
      exhibition: getAnimalsExhibition(day),
    };
    schedule[day] = objSchedule;
  });
  return schedule;
};

const getScheduleDay = (day) => {
  const scheduleDay = {};
  scheduleDay[day] = {
    officeHour: getOpeningHours(day),
    exhibition: getAnimalsExhibition(day),
  };
  return scheduleDay;
};

function getSchedule(scheduleTarget) {
  if (isValidAnimal(scheduleTarget)) {
    return species.find((e) => e.name === scheduleTarget).availability;
  }
  if (isValidDay(scheduleTarget)) return getScheduleDay(scheduleTarget);
  if (!isValidParam(scheduleTarget)) return getOpeningDays();
  return getOpeningDays();
}

module.exports = getSchedule;
