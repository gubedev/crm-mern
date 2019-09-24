import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes';

const app = express();
const corsOptions = {
  credentials: true,
  origin: [],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(router);

const port = process.env.NODE_ENV === 'DEV' ? process.env.DEV_PORT : process.env.PORT;
app.listen(port, () =>
  console.log(`api rest crm is listening on port ${port}!`)
);

export default app;