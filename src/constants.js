import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(__dirname, "../.env") });

export const env = process.env.NODE_ENV;
export const port = process.env.PORT || 1412;
