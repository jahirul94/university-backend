import express, { Application, Request, Response} from 'express';
const app: Application = express();
import cors from 'cors';
import { StudentRoutes } from './modules/student/student.route';
import { UsersRoutes } from './modules/user/user.route';

// parser
app.use(express.json());
app.use(cors());


// application routes 
app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/users", UsersRoutes);




const getAController = (req: Request, res: Response) => {
  res.send('Hello World!');
}

app.get('/', getAController);

export default app;
