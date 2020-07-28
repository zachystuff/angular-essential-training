import { Component } from '@angular/core';

/* 
In component, you can use template or template URL metadata to load markup. When using templateURL meta, be sure to use a relative path to a file containing the html to be loaded. Angular will load that file.

*/

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html'
})
export class AppComponent {}
