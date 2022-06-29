const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const animalSpecie = species.find((specie) => specie.name === animal);
  const animalResidents = animalSpecie.residents;
  return animalResidents.every((element) => element.age >= age);
}

getAnimalsOlderThan('lions', '7');

module.exports = getAnimalsOlderThan;
