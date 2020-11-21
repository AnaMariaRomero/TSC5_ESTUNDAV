import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../problems/problem1/problem1.component';

@Component({
  selector: 'app-pop-up1',
  templateUrl: './pop-up1.component.html',
  styleUrls: ['./pop-up1.component.css']
})

export class PopUp1Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopUp1Component>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  cerrar() {
    this.dialogRef.close();
  }

}
