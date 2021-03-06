import * as mysql from 'mysql';
import config from './config';

export interface IBaseRequest {
    id?: number;
}

export interface IBaseResponse {
    success?: boolean;
    message?: string;
    data?: any;
}

export const connection = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.name,
    multipleStatements: true
});

export default connection;
