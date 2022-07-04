const data = require('../data/zoo_data'); // 150 - 112 - 106 - 34

const { species } = data;
const locations = [...new Set(species.map((specie) => specie.location))];

const getResidentsBySex = (residents, sex) => {
  const filterResident = residents.filter((resident) => (sex ? resident.sex === sex : true));
  return filterResident;
};

const getResidentsNames = (residents, sorted) => {
  const residentsName = residents.map(({ name }) => name);
  if (sorted === true) residentsName.sort();
  return residentsName;
};

const getAnimalsByLocation = (area, includeNames, sex, sort) => {
  const animalsByLocation = species.filter((specie) => specie.location === area)
    .map(({ name, residents }) => (includeNames ? [name, residents] : name))
    .map((specie) => (includeNames ? [specie[0], getResidentsBySex(specie[1], sex)] : specie))
    .map((specie) => (includeNames ? { [specie[0]]: getResidentsNames(specie[1], sort) } : specie));
  return animalsByLocation;
};

const getAnimalMap = ({ includeNames, sex, sorted } = {}) => {
  const animalsByLocation = {};
  locations.forEach((loc) => {
    animalsByLocation[loc] = getAnimalsByLocation(loc, includeNames, sex, sorted);
  });
  return animalsByLocation;
};

module.exports = getAnimalMap;
