const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = function (config) {
    mongoose.connect(config.connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true,
    })
    .then(() => {
        console.log('✅ Successfully connected to MongoDB Atlas!');
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err);
    });

    // Load models
    require('../models/Product');
    require('../models/Category');
    require('../models/PostCategory');
    require('../models/User'); //.seedAdminUser()
};
