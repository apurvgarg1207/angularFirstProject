import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {

  roles:Array<any> = []
  
  constructor(private roleService:RoleService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllRoles()
  }

  deleterole(roleId:any){
    console.log(roleId)
    
    this.roleService.deleteRoleById(roleId).subscribe(resp=>{
      console.log(resp); 
      if(resp.status == 200){
        this.toastr.success("",resp.msg,{
          timeOut:3000
        })
        this.getAllRoles()
      }else{
        this.toastr.error("",resp.msg,{
          timeOut:3000
        })
        this.getAllRoles()
      }
    })
  }

  getAllRoles(){
    this.roleService.getAllRoles().subscribe(resp=>{
      console.log(resp);
      this.roles = resp.data
    })
  }

  editRole(roleId:any){
    console.log(roleId)
    this.router.navigateByUrl("/editrole/"+roleId)
  }

}
