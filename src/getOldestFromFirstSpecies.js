const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const firstSpecie = employees.find((employee) => employee.id === id).responsibleFor[0];
  const { residents } = species.find((animal) => animal.id === firstSpecie);
  const theOldest = residents.reduce((older, curr) => (curr.age > older.age ? curr : older));
  return Object.values(theOldest);
}

module.exports = getOldestFromFirstSpecies;
