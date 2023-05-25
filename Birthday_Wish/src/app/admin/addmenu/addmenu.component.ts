import { Component, OnInit } from '@angular/core';
import { Addmenu } from '../../class/addmenu';
import { Router } from '@angular/router';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {
  faUtensils=faUtensils;

  add(){
    this.router.navigate(['admin/addmenu/Addaddmenu']);
  }

  addmenus: Addmenu[] = [];

  constructor(private router:Router){}

  ngOnInit(): void {
      
  }


  

  

}
