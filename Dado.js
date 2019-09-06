export default class Dado {
  lanzarDado() {
    return Math.trunc(Math.random() * 100 + 1);
  }
}
