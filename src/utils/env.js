const config = require("config");

module.exports = function () {
  if (config.has("app.secret")) console.info("key is found");
  else {
    const msg =
      "You are not setting the key or maybe you type incorrect key. Make sure you type right key .";
    throw new Error(msg);
  }
};
