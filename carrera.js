import Tortuga from "./tortuga.js";
import Liebre from "./liebre.js";
import Dado from "./Dado.js"
class Carrera{
  constructor(){
    this.hacerCarrera();
  }
  hacerCarrera(){
    let tortuga1 = new Tortuga("Tortuga Juan");
    let liebre1 = new Liebre("Liebre Pedro");
    let dado = new Dado();
    let i = 0;
    while(tortuga1.posicion <= 90 && liebre1.posicion <= 90){
      tortuga1.moverse(dado.lanzarDado());
      liebre1.moverse(dado.lanzarDado());
      console.log(`Vuelta ${i} | ${tortuga1.nombre} posicion: ${tortuga1.posicion} | ${liebre1.nombre} posicion: ${liebre1.posicion}`)
      
      i++;
    }
    if((i == 1 && tortuga1.posicion >= 90 && liebre1.posicion >= 90) || tortuga1.posicion == liebre1.posicion){
      console.log("empate");
    }else if(tortuga1.posicion < liebre1.posicion){
      console.log("Gano liebre");
    }else if(tortuga1.posicion > liebre1.posicion){
      console.log("Gano tortuga");
    }
  }
}
let carrera = new Carrera();