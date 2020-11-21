import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../problems/problem1/problem1.component';

@Component({
  selector: 'app-pop-up3',
  templateUrl: './pop-up3.component.html',
  styleUrls: ['./pop-up3.component.css']
})
export class PopUp3Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopUp3Component>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }
  cerrar() {
    this.dialogRef.close();
  }


}
