const History = require("../data/history");
const data = require("../data/data.json");

const deleteScanner = (req, res) => {
  if (!req.body.id)
    return res.json({ success: false, message: "id is required" });
  const history = History.deleteScanner(req.body.id);
  let newData = data.filter((item) => {
    return history.findIndex((it) => it.personID == item.id) != -1;
  });
  newData = newData.map((item) => {
    return { ...item, time: History.find(item.id).time };
  });
  res.json({ success: true, data: newData });
};

module.exports = deleteScanner;
