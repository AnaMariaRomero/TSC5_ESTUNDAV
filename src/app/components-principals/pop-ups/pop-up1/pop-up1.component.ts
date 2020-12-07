import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up1',
  templateUrl: './pop-up1.component.html',
  styleUrls: ['./pop-up1.component.css']
})

export class PopUp1Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopUp1Component>) { }

  ngOnInit() {
  }

  cerrar() {
    this.dialogRef.close();
  }

}
