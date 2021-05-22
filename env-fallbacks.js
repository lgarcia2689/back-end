require("dotenv").config();

exports.PORT = process.env.PORT || "6000";
exports.NODE_ENV = process.env.NODE_ENV || "development";

exports.DATABASE_URL = process.env.DATABASE_URL;
exports.DEV_DATABASE_URL = process.env.DEV_DATABASE_URL;
exports.TESTING_DATABASE_URL = process.env.TESTING_DATABASE_URL;
