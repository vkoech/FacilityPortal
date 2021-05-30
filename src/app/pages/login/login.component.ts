import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/shared/services/login.service';
import { ToastrService } from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private toastr: ToastrService, public serviceLogin: LoginService, private router: Router,  private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
  }
  get f() {  return this.serviceLogin.formModel?.controls; }
  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.serviceLogin.formModel.value);
    this.SpinnerService.show();
    localStorage.setItem('studentNo', this.serviceLogin.formModel.value.StudentNo);
    this.serviceLogin.login().subscribe(
      (res: any) => {
        if (res.responseCode) {
          // save email key
          // reset after success
          this.serviceLogin.formModel.reset();
          // this.responseCode = true;
          this.toastr.success(res.responseDescription, 'Login Successful');
          this.SpinnerService.hide();
          this.router.navigate(['tickets']);
        } else {
          this.toastr.error( res.responseDescription, 'Login Failed!!!');
          this.SpinnerService.hide();
        }
        // alert(res.responseDescription);
      },
      err => {
        // console.log(err);
        this.toastr.error(err, 'Error!');
      }
    );
  }

}
