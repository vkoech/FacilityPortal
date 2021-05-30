import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-raised-tickets',
  templateUrl: './raised-tickets.component.html',
  styleUrls: ['./raised-tickets.component.css']
})
export class RaisedTicketsComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  btnClick() {
    this.router.navigate(['/newTickets']);
  }
}
