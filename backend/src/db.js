const { connect } = require("mongoose");

const connectDb = async () => {
  try {
    await connect(process.env.DATABASE_URI, { dbName: process.env.DB_NAME });
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
};

module.exports = { connectDb };