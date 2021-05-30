import { Component, OnInit } from '@angular/core';
import {NewTicketsService} from '../../shared/services/new-tickets.service';

@Component({
  selector: 'app-new-tickets',
  templateUrl: './new-tickets.component.html',
  styleUrls: ['./new-tickets.component.css']
})
export class NewTicketsComponent implements OnInit {

  constructor(private ticketsService: NewTicketsService) { }

  ngOnInit(): void {
    this.ticketsService.getPropertyCode()
  }

}
