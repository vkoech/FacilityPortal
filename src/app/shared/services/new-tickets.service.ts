import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import {InvoicesModel} from '../models/invoices.model';
import {PropertyModel} from '../models/property.model';
import {ReceiptModel} from '../models/receipt.model';

@Injectable({
  providedIn: 'root'
})
export class NewTicketsService {

  readonly baseUrl = 'https://regent.angazake.com/facility-moduleapi/api/' ;
  propertyCode: PropertyModel [];


  formModel = this.fb.group({
      No: ['', Validators.required],
      propertyCode: ['', Validators.required],
      floor: ['', Validators.required],
      areaCode: ['', Validators.required],
      Description: ['', Validators.required],
      Status: ['', Validators.required],
    }
  );

  constructor(private fb: FormBuilder, private http: HttpClient) {}


// tslint:disable-next-line:typedef
  insertDetails() {
    const body = {
      No: this.formModel.value.No,
      PropertyCode: this.formModel.value.propertyCode,
      Floor: this.formModel.value.floor,
      AreaCode: this.formModel.value.AreaCode,
      Description: this.formModel.value.Description,
      Status: this.formModel.value.PropertyCode,

    };
    return this.http.post(this.baseUrl + '/login', body);
  }
  getPropertyCode() {
      this.http.get<PropertyModel[]>(this.baseUrl + 'maintenance/getMaintenanceProperties').subscribe(
        data => {
          this.propertyCode = data;
          console.log(this.propertyCode)
        }
      );
  }
}
