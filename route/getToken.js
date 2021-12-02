const data = require("../data/data.json");

const getToken = (req, res) => {
  console.log(req.body);
  const index = data.findIndex(
    (item) => item.name == req.body.name && item.studentID == req.body.studentID
  );
  if (index == -1)
    return res.json({ success: false, message: "user not found" });

  return res.json({
    success: true,
    data: {
      token: data[index].token,
    },
  });
};

module.exports = getToken;
