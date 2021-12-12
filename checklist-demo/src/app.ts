import { createConnection } from "typeorm";
import "reflect-metadata";
import express from 'express';
import bodyParser from 'body-parser'
import http from 'http';

import router from './router'


createConnection().then(connection => {
  console.log("database 连接成功...");
})


const app = express();

app.use(bodyParser.json());
app.use(router)
// create application/json parser
http.createServer(app);
app.listen(3000);