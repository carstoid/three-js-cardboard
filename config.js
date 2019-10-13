var fs = require("fs");

module.exports = {
    cert: fs.readFileSync(__dirname + "/_key/rootCA.pem"),
    key: fs.readFileSync(__dirname + "/_key/rootCA.key"),
    passphrase: "Mar1es222"
};
