import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from 'src/app/class/theme';
import { UserThemeHomeService } from 'src/app/services/user-theme-home.service';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit{
  
  
  searchText!:string;
  themes:Theme[]=[];
  private getEvents(){
    this.eventservice.getAllThemes().subscribe(data=>{
      console.log(data);
      this.themes = data;
    });
  }

  constructor(private router:Router,private eventservice:UserThemeHomeService) { }

  ngOnInit(): void{
    this.getEvents()
  }

  
}
