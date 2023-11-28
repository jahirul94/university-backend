import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import notFound from './app/Middlewares/notFound';
import globalErrorHandler from './app/Middlewares/globalErrorHandler';
import router from './app/routes';

// parser
app.use(express.json());
app.use(cors());


// application routes 
app.use("/api/v1/", router);


const getAController = (req: Request, res: Response) => {
  res.send('Hello World!');
}

app.get('/', getAController);

app.use(globalErrorHandler)
app.use(notFound)

export default app;
