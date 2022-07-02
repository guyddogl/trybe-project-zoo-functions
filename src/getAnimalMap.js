const data = require('../data/zoo_data');

const { species } = data;
const locations = [...new Set(species.map((specie) => specie.location))];
// console.log(locations);
// console.log(locations.indexOf('NW'));

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

const getResidents = (location, options) => {
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
    // console.log(species.find((e) => animal === e.name).residents.filter((elemento) => elemento.sex === 'male'));
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
  if (!sex && sorted === true) {
    const animalsNameByLocation = {
      NE: getResidentsOrdered('NE'),
      NW: getResidentsOrdered('NW'),
      SE: getResidentsOrdered('SE'),
      SW: getResidentsOrdered('SW'),
    };
    return animalsNameByLocation;
  }
  if (sex && sorted === true) {
    const animalsNameByLocation = {
      NE: getResidentsBySexSort('NE', options),
      NW: getResidentsBySexSort('NW', options),
      SE: getResidentsBySexSort('SE', options),
      SW: getResidentsBySexSort('SW', options),
    };
    return animalsNameByLocation;
  }
  const animalsNameByLocation = {
    NE: getResidentsBySex('NE', options),
    NW: getResidentsBySex('NW', options),
    SE: getResidentsBySex('SE', options),
    SW: getResidentsBySex('SW', options),
  };
  return animalsNameByLocation;
};

const getAnimalsNamesByLocation = (options) => {
  if (Object.keys(options).length === 1) {
    const animalsNameByLocation = {
      NE: getResidents('NE', options),
      NW: getResidents('NW', options),
      SE: getResidents('SE', options),
      SW: getResidents('SW', options),
    };
    return animalsNameByLocation;
  }
  return getAnimalsWithParam(options);
};
// console.log(getAnimalsNamesByLocation());

function getAnimalMap(options) {
  if (!options) return getAnimalsByLocation();
  const { includeNames } = options;
  if (!includeNames) return getAnimalsByLocation();
  if (includeNames === true) return getAnimalsNamesByLocation(options);
}

// console.log(getAnimalMap());
// console.log(getAnimalMap({ includeNames: true}));
// console.log(getAnimalMap({ includeNames: true, sorted: true }));
// console.log(JSON.stringify(getAnimalMap({ sorted: true })));
// console.log(JSON.stringify(getAnimalMap({ sex: 'female' })));

module.exports = getAnimalMap;
