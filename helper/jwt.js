const jwt = require("jsonwebtoken");

function generateToken(payload) {
  const token = jwt.sign(payload, "RAHASIA");
  return token;
}

function verifyToken(token) {
  const decoded = jwt.verify(token, "RAHASIA");
  return decoded;
}

module.exports = {
  generateToken,
  verifyToken,
};
