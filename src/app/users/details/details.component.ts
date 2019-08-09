import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input('item') user: contacts.User;

  constructor() { }

  ngOnInit() {
  }

}
