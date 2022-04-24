import mongoose from 'mongoose';

let dbURI = 'mongodb://localhost:27017/msgs_db';

mongoose.connect(dbURI, {
    useNewURLParser: true,
    useUnifiedTopology: true 
});

// print message to console when connected to DB 
mongoose.connection.on('connected', () => { 
    console.log('Mongoose connected to ' + dbURI); 
});

//print out the erorr messages if problem connecting
mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error:' + err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoodse disconnected');
});

import './models/messages-schema.js';
import './models/user-schema.js';
import './models/course-schema.js';