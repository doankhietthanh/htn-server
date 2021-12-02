const getQR = (req, res) => {
  const data = new Date();

  res.json({
    data: data.toLocaleDateString() + "_617bda72-dbd7-408e-b273-d8ce279dc503",
  });
};

module.exports = getQR;
