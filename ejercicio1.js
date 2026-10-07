class Computador { //Remplazar la palabra "class" por "function" y eliminar el constructor para que sea una función constructora
  constructor(marca, procesador, ram, precio) {
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;
  }

}

const laptop1 = new Computador("Dell", "Intel i7", 16, 2500000);
const laptop2 = new Computador("Sony", "Intel i5", 8, 1800000);

console.log(laptop1);
console.log(laptop2);
