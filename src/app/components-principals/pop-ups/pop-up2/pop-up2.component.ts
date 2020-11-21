import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../problems/problems.component';


@Component({
  selector: 'app-pop-up2',
  templateUrl: './pop-up2.component.html',
  styleUrls: ['./pop-up2.component.css']
})
export class PopUp2Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopUp2Component>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  cerrar() {
    this.dialogRef.close();
  }

}
