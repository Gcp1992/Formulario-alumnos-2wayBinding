import { Component } from '@angular/core';
import { Alumno } from '../_modelo/alumno';

@Component({
  selector: 'app-formulario-alumnos',
  templateUrl: './formulario-alumnos.component.html',
  styleUrls: ['./formulario-alumnos.component.css']
})
export class FormularioAlumnosComponent {

  //Declaro Array vacío donde introduciré los alumnos
  alumnos:Alumno[]=[];

  //Debido al two way Binding estos son los valores que se verán por defecto en los campos del formulario
  id:number=0;
  nombre:string="";
  dni:string="";
  horas_formacion:number=0;

  introducirEmpleado(){
    //Me creo un objeto de tipo Alumno que va a introducir en el Array alumnos
    //A su constructor lo rellenamos con los valores que nos llegan con two way Binding
    let miAlumno=new Alumno(this.id,this.nombre,this.dni,this.horas_formacion);
    this.alumnos.push(miAlumno)
  }
}
