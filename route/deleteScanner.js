const History = require("../data/history");
const data = require("../data/data.json");

//function deleteScanner: remove data when you want
const deleteScanner = (req, res) => {
  if (!req.body.id)
    return res.json({ success: false, message: "id is required" });

  //Check "id" by findIndex: If they are the same id => delete them, otherwise return -1
  const history = History.deleteScanner(req.body.id);
  let newData = data.filter((item) => {
    return history.findIndex((it) => it.personID == item.id) != -1;
  });

  //Print to the screen after you delete them
  newData = newData.map((item) => {
    return { ...item, time: History.find(item.id).time };
  });
  res.json({ success: true, data: newData });
};

module.exports = deleteScanner;
