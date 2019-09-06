import Corredor from "./corredor.js";
export default class Liebre extends Corredor{
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
    if(numero > 0 && numero <= 20){
      this.dormir();
    }else if (numero > 20 && numero <= 40){
      this.saltoGrande();
    }else if (numero > 40 && numero <= 50){
      this.resbalonGrande();
    }else if (numero > 50 && numero <= 85){
      this.saltoPequeño();
    }else if (numero > 85 && numero <= 100){
      this.resbalonPequeño();
    }
  }
  saltoGrande(){
    for(let i = 0; i <= 8; i++){
      this._posicion += this.avanzar();
    }  
  }
  saltoPequeño(){
      this._posicion += this.avanzar();
  }
  resbalonGrande(){
    for(let i = 0; i <= 11; i++){
      this._posicion -= this.retroceder();
    }
  }
  resbalonPequeño(){
    for(let i = 0; i <= 1; i++){
      this._posicion -= this.retroceder();
    }
  }
  dormir(){
    return 0;
  }
}