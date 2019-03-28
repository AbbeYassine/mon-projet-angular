import {Injectable} from '@angular/core';
import {User} from '../user';
import {HttpClient} from '@angular/common/http';
import {Config} from '../config';
import {StorageService} from './storage.service';

@Injectable()
export class AuthService {
  userEmail: string = '';

  isAuth = false;

  constructor(private httpClient: HttpClient,
              private storageService: StorageService) {
  }

  signIn(user: User) {
    return this.httpClient.post(Config.BaseUrl + 'users/login', user);
  }

  signOut() {
    this.isAuth = false;
    this.storageService.removeAll();
  }

  addUser(user: User) {
    return this.httpClient.post(Config.BaseUrl + 'users/signup', user);
  }
}
