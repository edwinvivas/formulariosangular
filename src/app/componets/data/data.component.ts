import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable} from 'rxjs/Rx';
import { resolve } from 'dns';

@Component({
  selector: "app-data",
  templateUrl: "./data.component.html",
  styles: []
})
export class DataComponent implements OnInit {
  forma: FormGroup;

  usuario: any = {
    nombrecompleto: {
      nombre: "edwin",
      apellido: "vivas"
    },
    correo: "edwin.vivas@cun.edu.co",
    pasatiempos: ["correr", "dormir", "comer"]
  };

  constructor() {
    console.log(this.usuario);

    this.forma = new FormGroup({
      nombrecompleto: new FormGroup({
        nombre: new FormControl("", [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl("", [Validators.required, this.novivas])
      }),
      correo: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
      ]),
      pasatiempos: new FormArray([
        new FormControl("correr", Validators.required)
      ]),
      username: new FormControl('', Validators.required, this.existeUsuario),
      password1: new FormControl('', Validators.required),
      password2: new FormControl()

    });



    /*  this.forma.setValue( this.usuario ); */
this.forma.controls['password2'].setValidators([
Validators.required,
this.noIgual.bind( this.forma )

]);

/* escuchar cambios en los input de todo el formulario*/
/* this.forma.valueChanges
.subscribe( data => {
console.log(data);

}) */

/* escuchar los cambios de un input */

this.forma.controls['username'].valueChanges
.subscribe( data => {
console.log(data);

})

this.forma.controls['username'].statusChanges
.subscribe( data => {
console.log(data);

})

  }


  agregarPasatiempo() {
    (<FormArray>this.forma.controls["pasatiempos"]).push(
      new FormControl("", Validators.required)
    );
  }

  novivas(control: FormControl): { [s: string]: boolean } {
    if (control.value === "vivas") {
      return {
        novivas: true
      };
    }
    return null;
  }

  noIgual(control: FormControl): { [s: string]: boolean } {

    let forma:any =this;

    if (control.value !== forma.controls['password1'].value) {
      return {
        noigaules: true
      };
    }
    return null;
  }

  existeUsuario( control: FormControl): Promise<any>|Observable<any>{

let promesa = new Promise (
  (resolve, reject )=> {

setTimeout( () =>{
if(control.value === "strider"){
resolve ({ existe:true})

} else{
  resolve(null)
}

},3000 )

  }
)
return promesa ;

  }

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
    /* this.forma.reset( {
nombrecompleto:{
nombre:"",
apellido:""

},
correo:""

    } ); */
  }

  ngOnInit() {}
}
