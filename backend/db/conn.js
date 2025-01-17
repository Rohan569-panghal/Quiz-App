const mongoose = require('mongoose')
const MONGODB_URL = "mongodb+srv://rohanpanghal:rohanpanghal@cluster0.cwtuy.mongodb.net"
const DATABASE = "quiz"

async function databaseConnection(){
  try {
    await mongoose.connect(`${MONGODB_URL}/${DATABASE}`)
    console.log("Database connected successfully!!");
    
  } catch (error) {
    console.log(error,"Error in connecting to atlas");
    
  }

}

module.exports = {databaseConnection}