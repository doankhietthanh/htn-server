let dataTable = [];

const insert = (data) => {
  dataTable.push(data);
};

const select = () => {
  return dataTable;
};
const find = (personID) => {
  const index = dataTable.findIndex((data) => data.personID === personID);
  return dataTable[index];
};
const deleteScanner = (id) => {
  dataTable = dataTable.filter((data) => data.personID != id);
  return dataTable;
};

const exists = (personID) => {
  return dataTable.findIndex((item) => item.personID === personID) != -1;
};

const History = { insert, select, exists, deleteScanner, find };
module.exports = History;
