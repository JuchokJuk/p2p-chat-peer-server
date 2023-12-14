import { PeerServer } from "npm:peer";

const ENVIRONMENT = Deno.env.get("ENVIRONMENT") as 'DEV' | 'PROD';

const ssl = {
  PROD: undefined,
  DEV: {
    key: Deno.readTextFileSync("./cert/key.pem"),
    cert: Deno.readTextFileSync("./cert/cert.pem"),
  },
};

PeerServer({
  port: 9000,
  ssl: ssl[ENVIRONMENT],
});
