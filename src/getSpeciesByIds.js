const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  return ids.map((id) => {
    return species.find((specie) => {
      return specie.id === id;
    });
  });

}

module.exports = getSpeciesByIds;
