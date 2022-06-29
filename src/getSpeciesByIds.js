const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  return ids.map((id) => species.find((specie) => specie.id === id));
}

module.exports = getSpeciesByIds;
