const { v4: uuidv4 } = require("uuid");
const History = require("../data/history");

const data = require("../data/data.json");

const scanPerson = (req, res) => {
  const { qr, token } = req.body;
  console.log(qr, token);
  if (!qr || !token)
    return res.json({ success: false, message: "param is empty" });

  const index = data.findIndex((item) => item.token == token);
  if (index == -1)
    return res.json({ success: false, message: "token is not valid" });

  const date = new Date();
  if (date.toLocaleDateString() + "_617bda72-dbd7-408e-b273-d8ce279dc503" != qr)
    return res.json({ success: false, message: "qr is not valid" });

  if (History.exists(data[index].id))
    return res.json({ success: false, message: "person existed" });

  History.insert({ id: uuidv4(), personID: data[index].id });

  var io = req.app.get("socketio");
  io.emit("scan", data[index]);
  return res.json({ success: true, data: data[index] });
};

module.exports = scanPerson;
