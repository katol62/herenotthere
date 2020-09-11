import connection from '../misc/db';
import * as util from 'util';

export interface IUser {
    id?: number;
    first_name?: string;
    last_name?: string;
    phone?: string;
    email?: string;
    password?: string;
    role?: 'admin' | 'user';
}

export class User {
    private db = connection;
    private readonly asyncQuery: any;

    constructor() {
        this.asyncQuery = util.promisify(this.db.query).bind(this.db);
    }

    public async find( filter: IUser | any): Promise<any> {
        const where = filter ? Object.keys(filter).map(key => (key + ' = ' + this.db.escape(filter[key]))) : [];
        const whereStr = where.length ? ' WHERE ' + where.join(' AND ') : '';
        const query = 'SELECT * from users' + whereStr;
        try {
            const result = await this.asyncQuery(query);
            return result;
        } catch (e) {
            throw (e);
        }
    }

    public async create( user: IUser, cryptPwd: string): Promise<any> {
        console.log('=== user ===');
        console.log(user);
        console.log(cryptPwd);
        const query = 'INSERT INTO users (first_name, last_name, phone, email, password, role) SELECT ?, ?, ?, ?, ?, ? FROM DUAL WHERE NOT EXISTS (SELECT * FROM users WHERE email=?) LIMIT 1';
        const params = [
            user.first_name,
            user.last_name,
            user.phone,
            user.email,
            cryptPwd,
            user.role,
            user.email];
        try {
            const result = await this.asyncQuery(query, params);
            return result;
        } catch (e) {
            throw (e);
        }
    }

    public async update( user: IUser): Promise<any> {
        console.log(user);
        const id = user.id;
        const name = user.first_name;
        const last = user.last_name;
        const phone = user.phone;
        const email = user.email;
        const password = user.password ? user.password : null;
        const role = user.role;
        let query = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, phone = ?, password = ?, role = ? WHERE id = ?';
        let params = [name, last, email, phone, password, role, id];
        if (password == null) {
            query = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, phone = ?, role = ? WHERE id = ?';
            params = [name, last, email, phone, role, id];
        }
        try {
            const result = await this.asyncQuery(query, params);
            return result;
        } catch (e) {
            throw (e);
        }
    }

    public async delete(id: number): Promise<any> {
        const query = 'DELETE FROM users where id = ?';
        const params = [id];
        try {
            const result = await this.asyncQuery(query, params);
            return result;
        } catch (e) {
            throw (e);
        }
    }

}
