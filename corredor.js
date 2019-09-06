export default class Corredor{
  constructor(nombre){
    this._nombre = nombre;
  }
  get nombre(){
    return this._nombre;
  }
  set nombre(newNombre){
    this._nombre = newNombre;
  }
  avanzar(){
    return 1;
  }
  retroceder(){
    return 1;
  }
}