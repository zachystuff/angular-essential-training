/* use decorator to annotate class that will allow angular to know this is a module
 This is the root module class
 NgModule decorator allows angular know this is a module
*/

// This is module loading syntax supported by typescript. NgModule decorator
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// no semicolon after this. 
// NgModule takes an object with known properties to configure the class you decorate as an angular module. The properties are known as metadata
/* 
here we are making use of import, declarations and bootstrap metadata properties.
imports - used to bring other angular modules this module will need
delcaration - pipelines components, directives and pipes available that dont come from another module
bootstrap - The entrypoint for your app code. Used to bootstrap your App.

*/
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}