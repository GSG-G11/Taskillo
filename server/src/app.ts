import { join } from 'path';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import router from './routes';

const app = express();

const { env: { PORT, NODE_ENV } } = process;

app.use(router);

app.set('port', PORT || 4000);
app.disable('x-powered-by');

app.use([express.json(), express.urlencoded({ extended: true }), compression(), cookieParser()]);

if (NODE_ENV === 'development') {
  app.get('/', (req, res) => {
    res.json({ message: 'The server is running' });
  });
}

if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

export default app;
