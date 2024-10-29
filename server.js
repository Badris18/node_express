const express = require('express');

const {connectDB, disconnectDB} = require('./config/db');

const dotenv = require('dotenv');

//import routes
const categoryRoutes = require('./routes/api/v2/CategoryRouter');

const app = express();

// Initailize dotenv to access environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});


// Routes 
app.use('/api/categories', categoryRoutes);

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, () => {
    console.log(`server running on port http://${HOST}:${PORT}`);
});