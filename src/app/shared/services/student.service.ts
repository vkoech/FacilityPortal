import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {StudentModel} from '../models/student.model';
import {ActivitiesModel} from '../models/activities.model';
import {InvoicesModel} from '../models/invoices.model';
import {toInteger} from '@ng-bootstrap/ng-bootstrap/util/util';
import { ReceiptModel } from '../models/receipt.model';
import {CreditMemo} from '../models/creditmemo.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  readonly BaseURL = 'http://173.249.23.236/pbc-studentapi/api/student';
  student: StudentModel[];
  activity: ActivitiesModel[];
  invoices: InvoicesModel[];
  receipts: ReceiptModel[];
  credits: CreditMemo[];

  constructor(private http: HttpClient) { }

  getStudentInvoices(StudentNo: any) {
    this.http.get<StudentModel[]>( this.BaseURL + '/getInvoiceList?studentNo=' + StudentNo)
      .subscribe(
        data => {
          this.student = data;
          // console.log(this.student);
        },
        error => {
          console.log('error');
        }
      );
  }
  getStudentReceipts(StudentNo: any) {
    this.http.get<StudentModel[]>(this.BaseURL + '/getReceiptList?studentNo=' + StudentNo)
    .subscribe(
      data => {
        this.student = data;
      },
      error => {
        console.log('error');
      }
    );

  }
  getStudentCreditMemo(StudentNo: any) {
    this.http.get<StudentModel[]>(this.BaseURL + '/getCreditMemoList?studentNo=' + StudentNo)
      .subscribe(
        data => {
          this.student = data;
        },
        error => {
          console.log('error');
        }
      )
  }
  getTermActivities() {
   this.http.get <ActivitiesModel[]>('http://173.249.23.236/pbc-studentapi/api/term/getTermActivitiesList').subscribe(
     data => {
       this.activity = data;
      // console.log(this.activity);
     }
   )
  }
  getInvoices(InvoiceNo: String) {
    this.http.get<InvoicesModel[]>('http://173.249.23.236/pbc-studentapi/api/student/getInvoiceLines?invoiceNo=' + InvoiceNo).subscribe(
      data => {
        this.invoices = data;
        // console.log(this.invoices)
      }
    )
  }
    getReceipts(ReceiptNo: string) {
    this.http.get<ReceiptModel[]>('http://173.249.23.236/pbc-studentapi/api/Student/getReceiptLines?receiptNo=' + ReceiptNo).subscribe(
      data => {
        this.receipts = data;
        // console.log(this.receipts)
      }
    )
  }
  getCreditMemos(creditMemoNo: String) {
    this.http.get<CreditMemo[]>('http://173.249.23.236/pbc-studentapi/api/Student/getCreditMemoLines?creditMemoNo=' + creditMemoNo)
      .subscribe(data => {
        this.credits = data;
        console.log(this.credits)
      })

  }
}
