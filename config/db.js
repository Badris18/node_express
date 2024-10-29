const mongoose = require('mongoose');
require('dotenv').config(); //ensure environment variables are located

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            UseNewUrlparser: true,
            useUnifiedTopology:true
         });
         console.log('MongoDB connected successfully');
    }catch(err){
        console.error('MongoDB connection failed:', err.message);
        process.exit(1); //exit process with failure
    }
}

const disconnectDB = async () => {
    try {
        await mongoose.disconnect();
        console.log('MongoDB disconnected successfully');

    }catch(err){
        console.error('MongoDB connection failed:', err.message);
        process.exit(1); //exit process with failure
        }
    };

module.exports = {connectDB, disconnectDB };  

