import { Component, Inject, OnInit } from '@angular/core';

import { PopUp2Component } from '../../pop-ups/pop-up2/pop-up2.component';
import { PopUp1Component } from '../../pop-ups/pop-up1/pop-up1.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopUp3Component } from '../../pop-ups/pop-up3/pop-up3.component';
import { PopUp4Component } from '../../pop-ups/pop-up4/pop-up4.component';

//preferible crear modelos de los formularios, como este es uno y simple, no pasa nada.
export interface FormData {
  box: string;
  quantity: number;
  total: number;
  ceramics:number; 
  justify: string;
}

export interface ContentElement{
  box: number;
  content: string;
}

const ELEMENT_DATA: ContentElement[] = [
  {box: 1, content:'Su costo es de $650 y contiene 6 ceramicas, en donde cada ceramica cubre 0,16 metros cuadrados'},
  {box: 2, content:'Su costo es de $550 y contiene 16 ceramicas, en donde cada ceramica cubre 0,1225 metros cuadrados' },
  {box: 3, content: 'Su costo es de $600 y contiene 13 ceramicas, en donde cada ceramica cubre 0,36 metros cuadrados'},
]

@Component({
  selector: 'app-problem1',
  templateUrl: './problem1.component.html',
  styleUrls: ['./problem1.component.css']
})


export class Problem1Component implements OnInit {
  
  displayedColumns: string[] = ['box', 'content'];
  dataSource = ELEMENT_DATA;
  justify: string;
  ceramics: number;
  total: number;
  quantity: number;
  box: string;
  answer1: boolean = false;
  answer2: boolean = false;
  answer3: boolean = false;

  constructor(public dialogo: MatDialog) {
  }

  ngOnInit(){
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

  enviarRespuesta(){
    this.dialogo.open(PopUp4Component, {
      width: '500px',
      height: 'auto',

      data:{ 
        box: this.box,
        quantity: this.quantity,
        total: this.total,
        ceramics:this.ceramics,
        justify: this.justify },
    });
    this.correctAnswer(this.quantity,this.total,this.box, this.ceramics);
  }
  correctAnswer(quantity: number, total: number, box: string, ceramics:number)
  {
    if(this.isNotEmpty(quantity,total,box,ceramics) && quantity == 9 && total == 5400 && ceramics == 4.5 && box=="1"){
      this.answer1 = true;
      this.answer2 = false;
    } 
    else if(!this.isNotEmpty(quantity,total,box,ceramics)){
      this.answer3 = true;
      this.answer1 = false;
      this.answer2 = false;
    }
    else{ this.answer2 = true; this.answer1 = false;}
  }

  isNotEmpty(quantity: number, total: number, box: string, ceramics:number){
    return (quantity != null  && total != null && ceramics != null && box != null) ? true : false;
  }
}

