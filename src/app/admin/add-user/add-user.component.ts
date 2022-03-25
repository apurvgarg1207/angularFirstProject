import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/session.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private roleService: RoleService, private router:Router,private sessionService: SessionService, private toastr: ToastrService) { }

  userUniqueName: String = ""
  userName: String = ""
  gender: String = ""
  userAddress: String = ""
  userEmail: String = ""
  password: String = ""
  role: String = ""
  cNumber: String = ""


  roles: Array<any> = []

  ngOnInit(): void {
    this.getAllRoles()
  }

  saveUser() {
    let user = {
      "userUniqueName": this.userUniqueName,
      "userName": this.userName,
      "gender": this.gender,
      "userAddress": this.userAddress,
      "userEmail": this.userEmail,
      "password": this.password,
      "role": this.role,
      "cNumber": this.cNumber
    }
    this.sessionService.saveUser(user).subscribe(resp => {
      if (resp.status == 200) {
        this.toastr.success("", resp.msg, { timeOut: 3000 })
        this.router.navigateByUrl("/listrole")
      } else {
        this.toastr.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }

  getAllRoles() {
    this.roleService.getAllRoles().subscribe(resp => {
      this.roles = resp.data
      console.log(this.roles);
    })
  }
}
