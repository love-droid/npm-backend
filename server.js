// require('dotenv').config();

const Config = require("./config")();
const httpServer = requireHttpServer();

const server = httpServer({
  logger: process.env.DEBUG === "true" ? true : false,
});

// console.log(typeof process.env.DB_PASSWORD, process.env.DB_PORT);
server.listen(process.env.PORT || 3000, "0.0.0.0", (err, address) => {
  console.log(`server listening on ${address}`)
  // if (err) {
  //   console.log(err);
  //   process.exit(1);
  // }
});

