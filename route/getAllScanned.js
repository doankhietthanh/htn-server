const History = require("../data/history");
const data = require("../data/data.json");

const getAllScanned = (req, res) => {
  const history = History.select();
  const newData = data.filter((item) => {
    return history.findIndex((it) => it.personID == item.id) != -1;
  });
  res.json({ success: true, data: newData });
};

module.exports = getAllScanned;
