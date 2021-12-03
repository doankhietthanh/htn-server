const History = require("../data/history");
const data = require("../data/data.json");

const getAllScanned = (req, res) => {
  const history = History.select();
  let newData = data.filter((item) => {
    return history.findIndex((it) => it.personID == item.id) != -1;
  });
  newData = newData.map((item) => {
    return { ...item, time: History.find(item.id).time };
  });
  res.json({ success: true, data: newData });
};

module.exports = getAllScanned;
