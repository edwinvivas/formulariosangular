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
sexo:"hombre",
acepta: false
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
sexos:string [] = ["Hombre","Mujer"]


  constructor() { }


guardar(forma:NgForm)
  {
    console.log("Formulario posteado");
    console.log( "ngForm ",forma);
    console.log( "valor ",forma.value);
    console.log( "Usuario ",this.usuario);


  }
}
