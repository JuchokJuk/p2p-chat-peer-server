import { PeerServer } from "npm:peer";

const ENVIRONMENT = Deno.env.get("ENVIRONMENT") as 'DEV' | 'PROD';
const PORT = Deno.env.get("PORT") as string;

const ssl = {
  PROD: undefined,
  DEV: {
    key: Deno.readTextFileSync("./cert/key.pem"),
    cert: Deno.readTextFileSync("./cert/cert.pem"),
  },
};

PeerServer({
  port: Number(PORT),
  ssl: ssl[ENVIRONMENT],
});
