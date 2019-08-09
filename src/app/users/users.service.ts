import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


interface RespUser {
  results: contacts.User[];
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http :HttpClient)  { }

  get():Observable <contacts.User> {
   return this.http.get('https://randomuser.me/api/?results=5') 
      .pipe(
        map( (resp: RespUser) => resp.results )
        );
}

  }

