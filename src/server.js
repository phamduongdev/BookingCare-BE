import express from "express";
import bodyParser from "body-parser";
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import connectDB from "./config/connectDB";
import cors from 'cors';
require('dotenv').config();

let app = express();
app.use(cors({ origin: true }));

//config app
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 2002;
app.listen(port, () => {
    console.log('Backend is running on port: ' + port);
});