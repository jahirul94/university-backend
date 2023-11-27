import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });
export default {
  port: 5000,
  database_url:"mongodb+srv://mongooes-master:mongooes-master123@cluster0.kri1sc7.mongodb.net/first-projects?retryWrites=true&w=majority",
};