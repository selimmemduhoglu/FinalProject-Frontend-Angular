import { Component } from '@angular/core';


// Bu @Component class ın ettribute'udur
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Selim Memduhoglu'


}
