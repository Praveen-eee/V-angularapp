import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  ngOnInit(){
    $("#form_calc").change(function() {

      var totalPrice   = 0,
          values       = [];
          
      $('input[type=checkbox], input[type=radio]').each( function() {
        if( $(this).is(':checked') ) {
          values.push($(this).val());
          totalPrice += parseInt($(this).val());
            }
        });
    
      $("#price span").text(totalPrice);  
        
    });
}
}
