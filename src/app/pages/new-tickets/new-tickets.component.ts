import { Component, OnInit } from '@angular/core';
import {NewTicketsService} from '../../shared/services/new-tickets.service';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-new-tickets',
  templateUrl: './new-tickets.component.html',
  styleUrls: ['./new-tickets.component.css']
})
export class NewTicketsComponent implements OnInit {

  constructor(public ticketsService: NewTicketsService, private toastr: ToastrService, private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.ticketsService.getPropertyCode();
    this.ticketsService.getCategories();
  }
  onSubmit() {
    console.log(this.ticketsService.formModel.value);
    if (this.ticketsService.formModel.valid) {
      this.ticketsService.insertDetails().subscribe(
        (res: any) => {
          if (res.responseCode) {
            // this.studentService.formModel.reset();
            // this.responseCode = true;
            console.log(this.ticketsService.formModel.value);
            this.toastr.success(res.responseDescription, 'Application done successfully!!');
            this.SpinnerService.hide();
          } else {
            this.toastr.error('Application failed');
            this.SpinnerService.hide();
          }
          // alert(res.responseDescription);
        },
        err => {
          this.toastr.error(err, 'Error!');
          // console.log(err);
        }
      );
    } else {
      // validate all form fields
      this.toastr.error('All fields Required')
    }
  }
  getSelectedFloor(No: String) {
    this.ticketsService.getFloors(No);
  }
  getSelectedUnit(FloorCode: String) {
    this.ticketsService.getFloorsUnits(FloorCode);
  }
}
