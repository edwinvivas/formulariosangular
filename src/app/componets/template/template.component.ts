import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']

})
export class TemplateComponent   {

usuario:object = {
nombre:"",
apellido: "",
correo:"",
pais:"",
genero:"hombre"
}
paises= [{
codigo:"COL",
nombre: "Colombia"
},

{
  codigo:"ESP",
  nombre: "España"
}
]


  constructor() { }


guardar(forma:NgForm)
  {
    console.log("Formulario posteado");
    console.log( "ngForm ",forma);
    console.log( "valor ",forma.value);
    console.log( "Usuario ",this.usuario);


  }
}
