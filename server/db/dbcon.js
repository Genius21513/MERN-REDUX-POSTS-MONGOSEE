import mongoose from 'mongoose';
import { db } from '../config.js';

mongoose.connect(db.uri,
    { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log(`Successfully connected to MongoDB`))
    .catch((err) => console.log(err));
