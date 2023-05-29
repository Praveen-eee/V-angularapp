
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from '../user';
import { UserserviceService } from 'src/app/services/userservice.service';
// import { Customer } from '../customer';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  constructor(private userService:UserserviceService,
    private router : Router) { }
  newuser : User = new User();
  
  ngOnInit(): void {
  }
  
  // onSubmit(admin_user:string){
  //   if(admin_user=="admin")
  //     this.router.navigate(['/admin']);
  //   else if(admin_user=="user")
  //     this.router.navigate(['/user']);
    
  // }  
  onSubmit(){
    console.log(this.newuser);
    this.userService.storeUser(this.newuser).subscribe(data=>
      {
        console.log(data);
        alert("Registered Successfully");
      });
  }   

}
