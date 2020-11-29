module.exports = function (req, res, next) {
  const duration = getDuration(process.argv[2]);
  setTimeout(() => {
    next();
  }, duration);
};

function getDuration(durationCmd) {
  let duration = 200;
  if (durationCmd) {
    const commands = durationCmd.split("=");
    if (commands[0] === "duration" && !isNaN(+commands[1])) {
      duration = +commands[1];
    }
  }
  return duration;
}
