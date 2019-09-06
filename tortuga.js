import Corredor from "./corredor.js";
export default class Tortuga extends Corredor{
  constructor(nombre){
    super(nombre);
    this._posicion = 0;
  }
  get posicion(){
    return this._posicion;
  }
  set posicion(newPosicion){
    this._posicion = newPosicion;
  }
  moverse(numero){
    if(numero > 0 && numero <= 50){
      this.pasoRapido();
    }else if (numero > 50 && numero <= 70){
      this.resbalon();
    }else if (numero > 70 && numero <= 100){
      this.pasoLento();
    }
  }
  pasoLento(){
    return this._posicion += this.avanzar();
  }
  pasoRapido(){
    for(let i = 0; i <= 2; i++){
      this._posicion += this.avanzar();
    }  
  }
  resbalon(){
    for(let i = 0; i <= 5; i++){
      this._posicion -= this.retroceder();
    }
  }
}