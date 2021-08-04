import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/UserModel";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private BASE_URL_USERS_ENPOINT = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';

    constructor(private http: HttpClient) {}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.BASE_URL_USERS_ENPOINT);
    }
}