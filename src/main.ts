// Put the bootstrap logic in this file
/* 
Angular has support for running on multiple platforms. Eg server, browser, service worker
Here we are using the browser platform.aNote this page! VIP
*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'

platformBrowserDynamic().bootstrapModule(AppModule);