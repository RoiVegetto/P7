const express = require('express');
require('dotenv').config({path: './config/.env'});
require('./config/db');
const app = express();




//routes
//app.use('/api/user', userRoutes);


// server
app.listen(5000, () => {
    console.log(`listening on port ${process.env.PORT}`);
})