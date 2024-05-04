const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
  }


  //connect database;
  connectDatabase();

  
const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });

