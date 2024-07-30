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
    users_roles:   IUsersRoles;
}

export interface IUsersRoles {
    roles_ID:     number;
    roles_nombre: string;
}

export interface IUserForm {
    nombre: string;
    apellido: string;
    usuario: string;
    password: string;
    usersRoleId: number;
}