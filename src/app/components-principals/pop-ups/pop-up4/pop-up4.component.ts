import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up4',
  templateUrl: './pop-up4.component.html',
  styleUrls: ['./pop-up4.component.css']
})
export class PopUp4Component implements OnInit {

  box: string
  quantity: number
  total: number
  ceramics:number
  justify: string
  recievedData: FormData;

  constructor(public dialogRef: MatDialogRef<PopUp4Component>, @Inject(MAT_DIALOG_DATA) public data: FormData) {
    this.recievedData = data;
    
  }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }
}
