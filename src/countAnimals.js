const data = require('../data/zoo_data');

const { species } = data;

const allAnimals = () => {
  return species.reduce((acc, specie) => {
    acc[specie.name] = specie.residents.length;
    return acc;
  }, {});
};

function countAnimals(animal) {
  if (!animal) return allAnimals();
  const residents = species.find((specie) => specie.name === animal.specie).residents;
  if (!animal.sex) return residents.length;
  return residents.filter((element) => element.sex === animal.sex).length;
  
}

// console.log(countAnimals());
// console.log(countAnimals({ specie: 'giraffes' }));
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
