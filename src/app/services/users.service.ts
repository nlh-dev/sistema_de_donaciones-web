import { computed, Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { IBodyUser, IBodyUserEdit, IChangeStatusUser, IUser, IUsersRoles } from '../interfaces/users.interface';
import { BaseResponse } from '../interfaces/base.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService{

  private setUsers = signal<IUser[]>([]);
  public getUsers = computed<IUser[]>(() => this.setUsers());

  private setRoles = signal<IUsersRoles[]>([]);
  public getRoles = computed<IUsersRoles[]>(() => this.setRoles());

  public getUserLocal(): IUser | null {
    return JSON.parse(localStorage.getItem('userToken') as string);
  }

  getUsersAPI(): void {
    this.httpClient.get<IUser[]>(`${this.base_api_url}/users`).subscribe((response: IUser[]) => {
      this.setUsers.set(response);
    })

  }
  getRolesAPI(): void {
    this.httpClient.get<IUsersRoles[]>(`${this.base_api_url}/users/roles`).subscribe((response: IUsersRoles[]) => {
      this.setRoles.set(response);
    })
  }

  postUsersAPI(users: IBodyUser): void {
    users.usersRoleId = Number(users.usersRoleId);
    this.httpClient.post<BaseResponse>(`${this.base_api_url}/users`, users).subscribe((response: BaseResponse) => {
      // console.log(response);
      this.getUsersAPI();
    })
  }
  updateUsersStatusAPI(users: IChangeStatusUser): void {
    this.httpClient.put<BaseResponse>(`${this.base_api_url}/users/status`, users).subscribe((response: BaseResponse) => {
      // console.log(response);
      this.getUsersAPI();
    })
  }
  putUsersAPI(users: IBodyUserEdit): void {
    users.usersRoleId = Number(users.usersRoleId);
    this.httpClient.put<BaseResponse>(`${this.base_api_url}/users`, users).subscribe((response: BaseResponse) => {
      // console.log(response);
      this.getUsersAPI();
    })
  }
  deleteUsersAPI(userId: string): void {
    this.httpClient.delete<BaseResponse>(`${this.base_api_url}/users/${userId}`).subscribe((response: BaseResponse) => {
      this.getUsersAPI();
    })
  }
}
