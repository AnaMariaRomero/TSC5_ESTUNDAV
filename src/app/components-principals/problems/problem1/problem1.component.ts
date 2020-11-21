import { Component, OnInit } from '@angular/core';

import { PopUp2Component } from '../../pop-ups/pop-up2/pop-up2.component';
import { PopUp1Component } from '../../pop-ups/pop-up1/pop-up1.component';
import { MatDialog } from '@angular/material/dialog';
import { PopUp3Component } from '../../pop-ups/pop-up3/pop-up3.component';

export interface DialogData {
  codigo: string;
}


@Component({
  selector: 'app-problem1',
  templateUrl: './problem1.component.html',
  styleUrls: ['./problem1.component.css']
})

export class Problem1Component implements OnInit {

  constructor(public dialogo: MatDialog) { }

  ngOnInit(): void {
  }

  open(){
    this.dialogo.open(PopUp1Component, {
      width: '500px',
      height: 'auto',
  });
  }

  rectangular(){
    this.dialogo.open(PopUp2Component, {
      width: '500px',
      height: 'auto',
  });}

  basexaltura(){
    this.dialogo.open(PopUp3Component, {
      width: '500px',
      height: 'auto',
  });}
}

