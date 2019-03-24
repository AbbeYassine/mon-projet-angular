
import { Injectable } from '@angular/core';
import { User } from '../user';
import {HttpClient} from '@angular/common/http';
import { Config } from '../config';

@Injectable()

export class AuthService {

    isAuth = false;
    constructor(private httpClient : HttpClient){
    }
    signIn(user : User){
        return this.httpClient.post(Config.BaseUrl + 'users/login',user);

        /*return new Promise(
            (resolve,reject)=>{
               setTimeout(
                   ()=> {
                       this.isAuth=true;
                       resolve(true);
                   },2000)
            }
        );*/
    }

    signOut(){
this.isAuth= false;
    }
    addUser(user : User){
        return this.httpClient.post(Config.BaseUrl + 'users/signup',user);
      }
}