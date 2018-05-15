import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, query,stagger  } from "@angular/animations";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [

  trigger('explainerAnim', [
     transition('* => *', [
       query('.col', style({ opacity: 0, transform: 'translateX(-40px)' })),

       query('.col', stagger('500ms', [
         animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
       ])),

       query('.col', [
         animate(1000, style('*'))
       ])

     ])
   ]),
   trigger('explainerAnim2', [
      transition('* => *', [
        query('.colOdd', style({ opacity: 0, transform: 'translateX(40px)' })),

        query('.colOdd', stagger('500ms', [
          animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),

        query('.colOdd', [
          animate(1000, style('*'))
        ])

      ])
    ])
]
//   animations:[
//          trigger('signal', [
//              state('void', style({
//                  'transform':'translateY(-100%)'
//              })),
//              state('go', style({
//                  'background-color':'green',
//                  'height':'100px'
//              })),
//              state('stop', style({
//                  'background-color':'red',
//                  'height':'50px'
//              })),
//              transition('void => *', animate(8000, keyframes([
//                  style({'transform':'scale(0)'}),
//                  style({'transform':'scale(.1)'}),
//                  style({'transform':'scale(.9)'}),
//                  style({'transform':'scale(1)'})
//              ]))),
//              transition('* => *', animate('2s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'))
//          ])
//      ],
//   styles:[`
//   .traffic-light{
//     width: 100px;
//     height: 100px;
//     background-color: black;
//   }
//   `],
//   template: `
// <div
//   [@signal]="signal"
//   class="traffic-light"
//   *ngIf="isHere"
//   >
//
// </div>
// <button (click)="onGoClick()">Go</button>
// <button (click)="onStopClick()">Stop</button>
// <hr>
// <button (click)="onToggleClick()">Toggle</button>`
  //templateUrl: './user.component.html',
  //styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //signal = "stop";
  // signal;
  //  isHere = false;
  //
  // onGoClick(){
  //       this.signal = 'go';
  //   }
  //
  //
  //   onStopClick(){
  //       this.signal = 'stop';
  //   }
  //
  //
  //   onToggleClick(){
  //       this.isHere = !this.isHere;
  //   }

  signal;
     isHere = false;

     onGoClick(){
         this.signal = 'go';
     }

     onStopClick(){
         this.signal = 'stop';
     }

     onToggleClick(){
         this.isHere = !this.isHere;
     }

  constructor() { }

  ngOnInit() {
  }

}
