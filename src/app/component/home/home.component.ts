import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 //array of object ko populate karna ha
 
  data = [{ 
  id: '1', productName:'gold watch', description: 'this is gold watch'
  },
  {
    id: '2', productName:'gold watch2', description: 'this is gold watch2'
    },
    {
      id: '3', productName:'gold watch3', description: 'this is gold watch3'
    },
    {
      id: '4', productName:'gold watch4', description: 'this is gold watch4'
      }
  ]
}
