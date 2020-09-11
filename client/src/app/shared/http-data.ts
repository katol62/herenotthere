export interface IUser {
    id?: number;
    first_name?: string;
    last_name?: string;
    phone?: string;
    email?: string;
    password?: string;
    newPassword?: string;
    role?: 'admin' | 'user';
}

export interface IBaseRequest {
    id?: number;
    data?: any;
}

export interface IBaseResponse {
    success?: boolean;
    message?: string;
    data?: any;
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
