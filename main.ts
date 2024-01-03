import { PeerServer } from "npm:peer";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

config({export: true});

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
