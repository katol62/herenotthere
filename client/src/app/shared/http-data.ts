export interface IUser {
    id?: number;
    first_name?: string;
    last_name?: string;
    phone?: string;
    email?: string;
    password?: string;
    role?: 'admin' | 'user';
}

export interface IBaseRequest {
    id?: number;
}

export interface IBaseResponse {
    success?: boolean;
    message?: string;
}
export interface IAuthRequest extends IBaseRequest{
    email?: string;
    password?: string;
    type?: 'admin' | 'user';
}

export interface IAuthResponse extends IBaseResponse{
    token?: string;
    user?: IUser;
}
