const getQR = (req, res) => {
  const data = new Date();

  //Generate QR code with the condition that a new QR code every day
  res.json({
    data: data.toLocaleDateString() + "_617bda72-dbd7-408e-b273-d8ce279dc503",
  });
};

module.exports = getQR;
