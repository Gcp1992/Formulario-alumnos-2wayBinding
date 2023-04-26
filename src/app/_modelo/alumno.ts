export class Alumno {
  _id:number = 0;
  _nombre:string = "";
  _dni:string = "";
  _horas_formacion:number = 0;

  constructor(id:number, nombre:string, dni:string, horas_formacion:number) {
    this._id = id;
    this._nombre = nombre;
    this._dni = dni;
    this._horas_formacion = horas_formacion;
  }
}
