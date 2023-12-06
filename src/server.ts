import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
import { Server } from "http"

let server: Server;


async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

process.on("unhandledRejection", () => {
  console.log("unhandled rejection error detection");
  if (server) {
    server.close(() => {
      process.exit();
    })
  }
  process.exit(1);
})

process.on("uncaughtException", () => {
  console.log("uncaught exception error detection");
  process.exit(1);
})