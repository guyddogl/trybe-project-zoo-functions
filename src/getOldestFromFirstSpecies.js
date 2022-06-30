const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;
// console.log(employees);

function getOldestFromFirstSpecies(id) {
  const firstSpecie = employees.find((employee) => employee.id === id).responsibleFor[0];
  const residents = species.find((animal) => animal.id === firstSpecie).residents;
  const theOldest = residents.reduce((older, curr) => (curr.age > older.age ? curr : older));
  return [theOldest.name, theOldest.sex, theOldest.age];
}

module.exports = getOldestFromFirstSpecies;
