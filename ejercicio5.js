class Vehiculo { 
  constructor(marca, modelo, color, anio, precio) {
    this.marca = marca;
    this.color = color;
    this.modelo = modelo;
    this.anio = anio;
    this.precio = precio;
  }
  
  descripcion() {
    return `El vehículo es un ${this.marca} ${this.modelo} de color ${this.color}, año ${this.anio} y tiene un precio de $${this.precio.toLocaleString()}.`;
  }

  cambiarColor(nuevoColor) {
    this.color = nuevoColor;
    return `El color del vehículo ${this.marca} ${this.modelo} ha sido cambiado a ${this.color}.`;
  }

  calcularIVA() {
    const iva = this.precio * 0.19;
    const precioConIVA = this.precio + iva;
    return `El precio del vehículo ${this.marca} ${this.modelo} es de $${precioConIVA.toLocaleString()} con el IVA incluido y el IVA es de $${iva.toLocaleString()}.`;
  }


}

const prompt = require('prompt-sync')();

const vehiculo1 = new Vehiculo(prompt("Ingrese la marca del vehículo 1: "), prompt("Ingrese el modelo del vehículo 1: "), prompt("Ingrese el color del vehículo 1: "), prompt("Ingrese el año del vehículo 1: "), Number(prompt("Ingrese el precio del vehículo 1: ")));
const vehiculo2 = new Vehiculo(prompt("Ingrese la marca del vehículo 2: "), prompt("Ingrese el modelo del vehículo 2: "), prompt("Ingrese el color del vehículo 2: "), prompt("Ingrese el año del vehículo 2: "), Number(prompt("Ingrese el precio del vehículo 2: ")));
const vehiculo3 = new Vehiculo(prompt("Ingrese la marca del vehículo 3: "), prompt("Ingrese el modelo del vehículo 3: "), prompt("Ingrese el color del vehículo 3: "), prompt("Ingrese el año del vehículo 3: "), Number(prompt("Ingrese el precio del vehículo 3: ")));

console.log(vehiculo1.descripcion());
console.log(vehiculo2.descripcion());
console.log(vehiculo3.descripcion());

console.log(vehiculo1.calcularIVA());
console.log(vehiculo2.calcularIVA());
console.log(vehiculo3.calcularIVA());

console.log(vehiculo1.cambiarColor(prompt("Ingrese el nuevo color del vehículo 1: ")));
console.log(vehiculo2.cambiarColor(prompt("Ingrese el nuevo color del vehículo 2: ")));
console.log(vehiculo3.cambiarColor(prompt("Ingrese el nuevo color del vehículo 3: ")));

