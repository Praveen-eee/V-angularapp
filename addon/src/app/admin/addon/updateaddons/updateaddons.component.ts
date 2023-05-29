import { Component, OnInit } from '@angular/core';
import { addon } from '../addon';
import { ActivatedRoute, Router } from '@angular/router';
import { AddonserviceService } from '../addonservice.service';

@Component({
  selector: 'app-updateaddons',
  templateUrl: './updateaddons.component.html',
  styleUrls: ['./updateaddons.component.css']
})
export class UpdateaddonsComponent implements OnInit{
  addOnid : number = 0;
  newaddon : addon = new addon();

  constructor(private router:Router,private addservice:AddonserviceService,private route:ActivatedRoute){

  }
  // saves(){
  //   this.addservice.addAddon(this.newaddon).subscribe(data=>{
  //     console.log(data);
  //     this.gotoaddon()
  //   });
  // }

  ngOnInit(): void{
    this.addOnid = this.route.snapshot.params['addOnid'];
    this.addservice.getAddonId(this.addOnid).subscribe(data => {
      this.newaddon = data;
    });
  }

  gotoaddon(){
    this.router.navigate(['/addAddons']);
  }

  onSubmit(){
    this.addservice.updateaddonss(this.addOnid,this.newaddon).subscribe(data =>{
      this.gotoaddon();
    })
  }

  
}
