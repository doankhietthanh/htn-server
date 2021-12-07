const data = require("../data/data.json");
function removeAccents(str) {
  var AccentsMap = [
    "aàảãáạăằẳẵắặâầẩẫấậ",
    "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
    "dđ",
    "DĐ",
    "eèẻẽéẹêềểễếệ",
    "EÈẺẼÉẸÊỀỂỄẾỆ",
    "iìỉĩíị",
    "IÌỈĨÍỊ",
    "oòỏõóọôồổỗốộơờởỡớợ",
    "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
    "uùủũúụưừửữứự",
    "UÙỦŨÚỤƯỪỬỮỨỰ",
    "yỳỷỹýỵ",
    "YỲỶỸÝỴ",
  ];
  for (var i = 0; i < AccentsMap.length; i++) {
    var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
    var char = AccentsMap[i][0];
    str = str.replace(re, char);
  }
  str = str.replace(/ /g, "");
  return str.trim();
}
//function getToken: check token with each person, if true => add data.json, false => print message: "user not found"
const getToken = (req, res) => {
  // console.log(req.body);
  const index = data.findIndex(
    (item) =>
      removeAccents(item.name) == removeAccents(req.body.name) &&
      item.studentID == req.body.studentID
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
