
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());


// db connection
import './db/dbcon.js';

// use routes
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';

app.use('/users', userRoutes);
app.use('/posts', postRoutes);


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Sever is running at port : ${port}`);
});

