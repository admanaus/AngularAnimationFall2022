import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    // animation triggers go here
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('* => closed', [
        animate('2s 300ms ease-out' )
      ]),
      transition('* => open', [
        animate('0.5s 100ms ease-in-out')
      ])
    ])
  ]
})



export class OpenCloseComponent {



  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
