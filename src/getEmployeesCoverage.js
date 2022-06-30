const data = require('../data/zoo_data');

const { species, employees } = data;

const getAllEmployees = () => {
  const allEmployees = [];
  employees.forEach((employee) => {
    const animalsNames = employee.responsibleFor
      .map((resp) => species
        .find((e) => e.id === resp).name);
    const animalsLocations = employee.responsibleFor
      .map((loc) => species
        .find((e) => e.id === loc).location);
    const newObjs = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: animalsNames,
      locations: animalsLocations,
    };
    allEmployees.push(newObjs);
  });
  return allEmployees;
};

const getEmployeeByFirstNameOrLastName = (obj) => {
  const employeeFirstName = employees.find((element) => element.firstName === obj.name);
  const employeeLastName = employees.find((element) => element.lastName === obj.name);
  const employeeFind = employeeFirstName || employeeLastName;
  if (!employeeFind) throw new Error('Informações inválidas');
  const animalsNames = employeeFind.responsibleFor
    .map((resp) => species
      .find((e) => e.id === resp).name);
  const animalsLocations = employeeFind.responsibleFor
    .map((loc) => species
      .find((e) => e.id === loc).location);
  const newObjs = {
    id: employeeFind.id,
    fullName: `${employeeFind.firstName} ${employeeFind.lastName}`,
    species: animalsNames,
    locations: animalsLocations,
  };
  return newObjs;
};

function getEmployeesCoverage(obj) {
  if (!obj) return getAllEmployees();
  // console.log(Object.keys(obj)[0]);
  return getEmployeeByFirstNameOrLastName(obj);
}
//  console.log(obj);
// getEmployeesCoverage();
// console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ name: 'Guyddo' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

module.exports = getEmployeesCoverage;
