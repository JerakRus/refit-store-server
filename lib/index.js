import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { routerItems, routerPosts, routerSMTP } from './api';

const port = 8000;
const server = express();

mongoose.connect('mongodb://localhost/refit-store-db', { useNewUrlParser: true });

server.use(bodyParser.json());
server.use('/api', routerItems);
server.use('/api', routerPosts);
server.use('/api', routerSMTP);

server.listen(port, () => {
    console.log('server started');
});

export default server;