const data = require('../data/zoo_data'); // 150 - 112 - 106

const { species } = data;
const locations = [...new Set(species.map((specie) => specie.location))];

const getAnimalsByLocation = () => {
  const animalsByLocation = {};
  locations.forEach((location) => {
    animalsByLocation[location] = [];
    species.filter((animal) => {
      if (animal.location === location) return animalsByLocation[location].push(animal.name);
      return animalsByLocation;
    });
  });
  return animalsByLocation;
};

const getResidents = (location) => {
  const index = locations.indexOf(location, 0);
  const animalsByLocation = getAnimalsByLocation();
  const arrayNames = [];
  Object.values(animalsByLocation)[index].forEach((animal) => {
    const objLocation = {};
    const { residents } = species.find((e) => animal === e.name);
    objLocation[animal] = residents.map((e) => e.name);
    arrayNames.push(objLocation);
  });
  return arrayNames;
};

const getResidentsOrdered = (location) => {
  const index = locations.indexOf(location, 0);
  const animalsByLocation = getAnimalsByLocation();
  const arrayNames = [];
  Object.values(animalsByLocation)[index].forEach((animal) => {
    const objLocation = {};
    const { residents } = species.find((e) => animal === e.name);
    objLocation[animal] = residents.map((e) => e.name).sort();
    arrayNames.push(objLocation);
  });
  return arrayNames;
};

const getResidentsBySex = (location, options) => {
  const { sex } = options;
  const index = locations.indexOf(location, 0);
  const animalsByLocation = getAnimalsByLocation();
  const arrayNames = [];
  Object.values(animalsByLocation)[index].forEach((animal) => {
    const objLocation = {};
    const { residents } = species.find((e) => animal === e.name);
    objLocation[animal] = residents.filter((e) => e.sex === sex).map((e) => e.name);
    arrayNames.push(objLocation);
  });
  return arrayNames;
};

const getResidentsBySexSort = (location, options) => {
  const { sex } = options;
  const index = locations.indexOf(location, 0);
  const animalsByLocation = getAnimalsByLocation();
  const arrayNames = [];
  Object.values(animalsByLocation)[index].forEach((animal) => {
    const objLocation = {};
    const { residents } = species.find((e) => animal === e.name);
    objLocation[animal] = residents.filter((e) => e.sex === sex).map((e) => e.name).sort();
    arrayNames.push(objLocation);
  });
  return arrayNames;
};

const getAnimalsWithParam = (options) => {
  const { sex, sorted } = options;
  const animalsNameByLocation = {};
  locations.forEach((loc) => {
    if (!sex && sorted === true) {
      animalsNameByLocation[loc] = getResidentsOrdered(`${loc}`);
    } else if (sex && sorted === true) {
      animalsNameByLocation[loc] = getResidentsBySexSort(`${loc}`, options);
    } else {
      animalsNameByLocation[loc] = getResidentsBySex(`${loc}`, options);
    }
  });
  return animalsNameByLocation;
};

const getAnimalsNamesByLocation = (options) => {
  if (Object.keys(options).length === 1) {
    const animalsNameByLocation = {};
    locations.forEach((loc) => {
      animalsNameByLocation[loc] = getResidents(`${loc}`);
    });
    return animalsNameByLocation;
  }
  return getAnimalsWithParam(options);
};

function getAnimalMap(options) {
  if (!options) return getAnimalsByLocation();
  const { includeNames } = options;
  if (!includeNames) return getAnimalsByLocation();
  if (includeNames === true) return getAnimalsNamesByLocation(options);
}

module.exports = getAnimalMap;
