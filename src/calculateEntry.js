const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  return {
    child: entrants.filter((child) => child.age < 18).length,
    adult: entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length,
    senior: entrants.filter((senior) => senior.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (!entrants || entrants.length === 0 || Object.keys(entrants).length === 0) return 0;
  const peopleGroup = countEntrants(entrants);
  const { child, adult, senior } = prices;
  const totalChild = child * peopleGroup.child;
  const totalAdult = adult * peopleGroup.adult;
  const totalSenior = senior * peopleGroup.senior;
  return totalChild + totalAdult + totalSenior;
}

module.exports = { calculateEntry, countEntrants };
