import { Component } from '@angular/core';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent {
  events:any[]=[
    {
      "eventName":"KK Event",
      "eventDate":"20-08-2023",
       "eventTime":"4pm-10pm",
       "eventCost":"22000"
  },
  {
    "eventName":"SS Event",
    "eventDate":"21-09-2023",
     "eventTime":"4pm-10pm",
     "eventCost":"20000"
},
{
  "eventName":"UU Event",
  "eventDate":"20-08-2023",
   "eventTime":"1pm-5pm",
   "eventCost":"35000"
},
{
  "eventName":"JJ Event",
  "eventDate":"20-08-2023",
   "eventTime":"2pm-9pm",
   "eventCost":"10000"
},
{
  "eventName":"MM Event",
  "eventDate":"03-08-2023",
   "eventTime":"7pm-10pm",
   "eventCost":"12000"
},

]
}