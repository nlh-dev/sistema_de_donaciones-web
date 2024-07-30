import { computed, Injectable, signal } from '@angular/core';
import { BaseService } from './base.service';
import { IUser, IUserForm } from '../interfaces/users.interface';
import { BaseResponse } from '../interfaces/base.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService{

  private setUsers = signal<IUser[]>([]);
  public getUsers = computed<IUser[]>(() => this.setUsers());

  getUsersAPI(): void {
    this.httpClient.get<IUser[]>(`${this.base_api_url}/users`).subscribe((response: IUser[]) => {
      this.setUsers.set(response);
    })
  }

  postUsersAPI(users: IUserForm): void {
    this.httpClient.post<BaseResponse>(`${this.base_api_url}/users`, users).subscribe((response: BaseResponse) => {
      console.log(response);
      this.getUsersAPI();
    })
  }
  putUsersAPI(users: IUserForm): void {
    this.httpClient.put<BaseResponse>(`${this.base_api_url}/users`, users).subscribe((response: BaseResponse) => {
      console.log(response);
      this.getUsersAPI();
    })
  }
  deleteUsersAPI(userId: string): void {
    this.httpClient.delete<BaseResponse>(`${this.base_api_url}/users/${userId}`).subscribe((response: BaseResponse) => {
      console.log(response);
      this.getUsersAPI();
    })
  }
}
