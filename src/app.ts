import express, { Application, Request, Response, NextFunction} from 'express';
import { bookRouter } from './routers/book';
import { connect } from './schemas';

const port: number = 5000;

const app:Application = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connect();

// APIs
app.use("/api/book", [bookRouter]);

app.listen(port, () => {
    console.log("listening at http://localhost:5000");
})