import { Component, OnInit } from '@angular/core';
import { addon } from '../addon';
import { Router } from '@angular/router';
import { AddonserviceService } from '../addonservice.service';

@Component({
  selector: 'app-addaddons',
  templateUrl: './addaddons.component.html',
  styleUrls: ['./addaddons.component.css']
})

export class AddaddonsComponent implements OnInit{

  newaddon : addon = new addon();

  constructor(private router:Router,private addservice:AddonserviceService){

  }
  saves(){
    this.addservice.addAddon(this.newaddon).subscribe(data=>{
      console.log(data);
      this.gotoaddon()
    });
  }

  ngOnInit(): void{

  }

  gotoaddon(){
    this.router.navigate(['/addAddons']);
  }

  onSubmit(){
    this.saves();
  }

  
}
