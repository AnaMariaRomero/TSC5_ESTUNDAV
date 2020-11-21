import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUp1Component } from '../pop-ups/pop-up1/pop-up1.component';
import { PopUp2Component } from '../pop-ups/pop-up2/pop-up2.component';

export interface DialogData {
  codigo: string;
}


@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})

export class ProblemsComponent implements OnInit {

  constructor(public dialogo: MatDialog) { }

  ngOnInit(): void {
  }

  open(){
    const dialogRef = this.dialogo.open(PopUp1Component, {
      width: '250px',
      data: { codigo: "abuelita" }
  });
  }

  rectangular(){
    const dialogRef = this.dialogo.open(PopUp2Component, {
      width: '250px',
      data: { codigo: "abuelita" }
  });}
}
