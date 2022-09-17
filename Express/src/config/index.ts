import dotenv from "dotenv";
import assert from "assert";

dotenv.config()

const {
  PORT,
  MONGODB_URI
} = process.env

assert(PORT, 'PORT is required')

export {
  PORT,
  MONGODB_URI
} 