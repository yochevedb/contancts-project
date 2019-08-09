import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersService } from '../users.service';

@Component({
  selector: 'user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: Array<contacts.User>;

  constructor(private userService :UsersService) { }

  getUsers(){
   this.userService.get().subscribe(
    users => this.users = users,
    err => console.error('Observer got an error: ' + err),
    () => console.log('Observer got a complete notification')
  );

  }

  ngOnInit(){
    this.getUsers();
  }

  

}
