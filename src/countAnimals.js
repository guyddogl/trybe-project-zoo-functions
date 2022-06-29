const data = require('../data/zoo_data');

const { species } = data;

const allAnimals = () => species.reduce((acc, specie) => {
  acc[specie.name] = specie.residents.length;
  return acc;
}, {});

function countAnimals(animal) {
  if (!animal) return allAnimals();
  const { residents } = species.find((specie) => specie.name === animal.specie);
  if (!animal.sex) return residents.length;
  return residents.filter((element) => element.sex === animal.sex).length;
}

module.exports = countAnimals;
