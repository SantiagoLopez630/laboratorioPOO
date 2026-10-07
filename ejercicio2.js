class Mascota { 
  constructor(nombre, especie, edad, peso) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;
  };

  // Sintaxis válida dentro de una clase
  presentarse() {
    return `Hola, soy ${this.nombre}, una ${this.especie} de ${this.edad} años y peso ${this.peso} kg.`;
  }

}

const mascota1 = new Mascota("Firulais", "perro", 3, 15);
const mascota2 = new Mascota("Michi", "gato", 2, 5);

console.log(mascota1.presentarse());
console.log(mascota2.presentarse());
