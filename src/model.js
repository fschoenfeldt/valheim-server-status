const Gamedig = require("gamedig");

module.exports.getServerData = async (dev) => {
  if (dev) {
    return mock;
  }

  let response;
  try {
    response = await Gamedig.query({
      type: "protocol-valve",
      host: "localhost",
      port: 2457,
    });
  } catch (e) {
    response = { error: "could not reach server" };
  }
  return response;
};

const mock = {
  name: "Flensburg und Umgebung",
  map: "Flensburg und Umgebung",
  password: true,
  raw: {
    protocol: 17,
    folder: "valheim",
    game: "",
    appId: 892970,
    numplayers: 0,
    numbots: 0,
    listentype: "d",
    environment: "l",
    secure: 0,
    version: "1.0.0.0",
    steamid: "90144580855409675",
    tags: "0.148.6",
  },
  maxplayers: 64,
  players: [],
  bots: [],
  connect: "localhost:2456",
  ping: 12,
};
