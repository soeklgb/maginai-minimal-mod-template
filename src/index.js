import maginai from "maginai";

const logger = maginai.logging.getLogger("minimal-mod");

maginai.events.gameLoadFinished.addHandler(() => {
  logger.info("Hello, world!");
});
