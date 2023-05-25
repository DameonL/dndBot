export default {
  log,
}

function log(message: any) {
  const timeStamp = new Date();
  const prefix = `[${timeStamp.toISOString()}] dndBot:`;
  if (typeof message !== "string") {
    message = JSON.stringify(message, null, 1);
  }

  console.log(`${prefix} ${message}`);
}