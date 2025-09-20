import path from "path";
import { fileURLToPath } from "url";

import * as dotenv from "dotenv";
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
dotenv.config({ path: __dirname + "/dev.env" });

export const JWT_SECRET = process.env.JWT_SECRET;
export const MONGODB_URI = process.env.MONGODB_URI;

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY;
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
export const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY;

export const PORT = process.env.PORT;
export const CORS_ORIGIN = process.env.CORS_ORIGIN;

console.log(
  "Server Timezone:",
  Intl.DateTimeFormat().resolvedOptions().timeZone
);
