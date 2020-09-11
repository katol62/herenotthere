import * as express from 'express';
import {authRoutes} from "./ApiAuthRoute";
import {checkJwt, hasRole} from "../middleware/MiddleWares";
import {usersRoutes} from "./ApiUserRoute";

class ApiRoutes {

    public app: express.Application;
    public router: express.Router = express.Router();

    constructor() {
        this.app = express();
        this.config();
    }

    private config() {
        this.router.get('/', (req: express.Request, res: express.Response) => {
                return res.status(405).json({ success: false, message: 'Not allowed!' });
            }
        );
        this.router.put('/', (req: express.Request, res: express.Response) => {
                return res.status(405).json({ success: false, message: 'Not allowed'});
            }
        );
        this.router.post('/', (req: express.Request, res: express.Response) => {
                return res.status(405).json({ success: false, message: 'Not allowed' });
            }
        );
        this.router.use('/auth', authRoutes.router);
        this.router.use('/users', checkJwt, hasRole(['admin']), usersRoutes.router);
    }
}

export const apiRoutes = new ApiRoutes();
