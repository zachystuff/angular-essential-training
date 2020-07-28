import { Component } from '@angular/core';
/*
To style your component, you can use the styles meta property of your component decorator.
The value for the styles meta is usually an array with string values. The syntax is seen below.
You have the option for styles and styleUrls
styleUrls can accept multiple css files, for various styles
*/

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
//   styles: [`
//     h1 { color: #ffffff; }
//     .description {
//         font-style: italic;
//         color: green;
//     }
//   `]
  styleUrls: ['./app.component.css']

})
export class AppComponent {}
