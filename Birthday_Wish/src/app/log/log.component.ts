import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(public fb: FormBuilder) {}
  
  
  ngOnInit(): void {
  }

  onSubmit(): void {
   
  }

}
