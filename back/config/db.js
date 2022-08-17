const mongoose = require("mongoose");

mongoose
    .connect('mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.9l0qgmw.mongodb.net/P7',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    )
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));