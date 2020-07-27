import { Component } from '@angular/core';


// in order to make a class a component, you need to import the component dependency from the angular core decorator. Two metadata are absolutely required. The selector and the template. Selector is found in the html
@Component({
    selector: 'app-root',
    template: '<h1>My App</h1>'
})

export class AppComponent{}