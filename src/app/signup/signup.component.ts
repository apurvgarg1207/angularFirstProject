import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userUniqueName: String = ""
  userName: String = ""
  userAddress: String = ""

  userEmail: String = ""
  password: String = ""
  role: String = "62146f5dcd55607959128da6"
  cNumber: String = ""

  constructor(private sessionService: SessionService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  saveuser() {
    console.log(this.userUniqueName);
    console.log(this.userEmail);
    console.log(this.password);

    let user = { "userUniqueName": this.userUniqueName, "userName": this.userName, "userAddress": this.userAddress, "userEmail": this.userEmail, "password": this.password, "role": this.role, "cNumber": this.cNumber }
    this.sessionService.saveVendor(user).subscribe(resp => {
      if (resp.status == 200) {
        this.toastr.success("", resp.msg, { timeOut: 3000 })
        this.router.navigateByUrl("/login")
      } else {
        this.toastr.error("", resp.msg, { timeOut: 3000 })
        this.router.navigateByUrl("/login")
      }
    })
  }

}
