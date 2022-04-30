import { join } from 'path';
import express, { Application, Request, Response } from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import router from './routes';
import { sendCode } from './utils';

dotenv.config();

const app: Application = express();

const { env: { PORT, NODE_ENV } } = process;

app.set('port', PORT || 4000);
app.disable('x-powered-by');

app.use([express.json(), express.urlencoded({ extended: false }), compression(), cookieParser()]);
app.use(router);
app.get('/send', async (req, res) => {
  const x = await sendCode(req.body.email);
  console.log(x, '222222222222');
  res.end();
});
if (NODE_ENV === 'development') {
  app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'The server is running' });
  });
}

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

export default app;
