import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import { routerItems, routerPosts, routerSMTP } from './api';

const port = 3000;
const server = express();

mongoose.connect('mongodb://localhost/refit-store-db', { useNewUrlParser: true });

server.use(bodyParser.json());
server.use('/api', routerItems);
server.use('/api', routerPosts);
server.use('/api', routerSMTP);

server.use(express.static(path.join(__dirname, '..', 'buildClient')));
server.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'buildClient', 'index.html'));
});

server.listen(port, () => {
    console.log(`server started on ${port} port`);
});

export default server;