import { Component, OnInit } from '@angular/core';
import { addon } from './addon';
import { Router } from '@angular/router';
import { AddonserviceService } from './addonservice.service';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.css']
})
export class AddonComponent implements OnInit {


  add(){
    this.router.navigate(['addAddon']);
  }
  addons: addon[] = [];

  private getAddons(){
    this.addservice.getList().subscribe(data=>{
      console.log(data)
      this.addons = data;
    });
  }

  // newaddon : addon = new addon();

  constructor(private router:Router,private addservice:AddonserviceService){

  }

  updateadd(addOnid:number){
    this.router.navigate(['updateaddons',addOnid]);
  }

  deleteadd(addOnid:number){
    this.addservice.deleteaddon(addOnid).subscribe(data =>{
      this.getAddons();
    })
  }


  ngOnInit(): void{
    this.getAddons()
  }

  // saves(){
  //   this.addservice.addAddon(this.newaddon).subscribe(data=>{
  //     console.log(data);
  //     this.gotoaddon()
  //   });
  // }

  // gotoaddon(){
  //   this.router.navigate(['/addFood']);
  // }

  // onSubmit(){
  //   this.saves();
  // }

 



}
