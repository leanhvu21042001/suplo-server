import mongoose from "mongoose";

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See:https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const DATABASE_URI = "mongodb://localhost:27017/suplo-mongodb";

export default async function connectMongooseDB() {
  try {
    const conn = await mongoose.connect(`${DATABASE_URI}`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
