import { Component, OnInit } from '@angular/core';
import { addon } from '../../class/addon';
import { Router } from '@angular/router';
import { AddonserviceService } from '../../services/addonservice.service';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.css']
})
export class AddonComponent implements OnInit {


  add(){
    this.router.navigate(['admin/addon/addAddon']);
  }


  constructor(private router:Router,private addservice:AddonserviceService){

  }

  ngOnInit(): void{
    
  }

}
