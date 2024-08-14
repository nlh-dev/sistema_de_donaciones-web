import { TypesRoles } from "./layout.interface";

export interface ILogin {
    usuario: string;
    password: string;
}

export interface IResponseLogin {
    userAuthenticate: IUser;
    message:          string;
    statusCode:       number;
    success:          boolean;
}

export interface IUser {
    users_ID:      number;
    usuario:       string;
    password:      string;
    nombre:        string;
    apellido:      string;
    users_role_id: number;
    users_status:  boolean;
    users_roles:   IUsersRoles;
}

export interface IUsersRoles {
    roles_ID:     number;
    roles_nombre: TypesRoles;
}

export interface IBodyUser {
    nombre: string;
    apellido: string;
    usuario: string;
    usersRoleId : number;
    password: string;
}
export interface IBodyUserEdit extends IBodyUser {
    idUsers: number;
}