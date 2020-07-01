const path = require("path");
module.exports = function(req, res, next) {
  return res.status(404).sendFile(path.join(__dirname + `/../views/404.html`));
  //return res.status(404).send({ message: "Page not found!" });
};
