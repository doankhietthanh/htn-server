const dataTable = [];

const insert = (data) => {
  dataTable.push(data);
};

const select = () => {
  console.log(dataTable);
  return dataTable;
};

// const deleteScanner = (id) => {
//   return dataTable;
// };

const exists = (personID) => {
  return dataTable.findIndex((item) => item.personID === personID) != -1;
};

const History = { insert, select, exists };
module.exports = History;
