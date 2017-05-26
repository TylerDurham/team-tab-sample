import * as express from 'express';
import * as path from 'path';
import { HttpUtility } from './config';

const server = express();

server.use('/', express.static(path.join(__dirname, 'public')));

server.listen(HttpUtility.port(), () => {
    console.log(`Server is listening at ${HttpUtility.getBaseUrl()}`);
});