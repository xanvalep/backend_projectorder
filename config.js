
let PORT = process.env.PORT || 8081;
let connectionString ="mongodb://localhost:27017/";
let dbName = "dbtest_order";
let fullUrl = connectionString + dbName;
module.exports = {
PORT,
connectionString,
dbName,
fullUrl,
};