import { Component } from '@angular/core';

@Component({
    selector:"pm-root",
    template:`<div>
                <h1>{{pagetTitle}}</h1>
                <pm-products></pm-products>
              </div>`
})
export class AppComponent {
  pagetTitle: string = "Acme Product Management";
}