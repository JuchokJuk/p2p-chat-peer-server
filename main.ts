import { PeerServer } from "npm:peer";

const ENVIRONMENT = Deno.env.get("ENVIRONMENT") as string;
const PORT = Deno.env.get("PORT") as string;

function ssl(environment: string) {
  if (environment === "DEV") {
    return {
      key: Deno.readTextFileSync("./cert/key.pem"),
      cert: Deno.readTextFileSync("./cert/cert.pem"),
    };
  }
}

PeerServer({
  port: Number(PORT),
  ssl: ssl(ENVIRONMENT),
});
