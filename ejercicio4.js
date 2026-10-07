class Libro { 
  constructor(nombre, autor, genero) {
    this.nombre = nombre;
    this.autor = autor;
    this.genero = genero;
    this.prestado = false;
  }

    prestar() {
        if (this.prestado==true) { 
        return `El libro ${this.nombre} ya está prestado.`;
        } else {
        this.prestado = true;
        return `El libro ${this.nombre} ha sido prestado.`;
        }
}

devolver() {
    if (this.prestado==false) { 
        return `El libro ${this.nombre} no está prestado.`;
    } else {
        this.prestado = false;
        return `El libro ${this.nombre} ha sido devuelto.`;
    }  

    }  

};

const libro1 = new Libro("Noches blancas", "Dostoyevski", "Romance");
const libro2 = new Libro("1984", "George Orwell", "Distopía");

console.log(libro1.prestar());
console.log(libro1.prestar());
console.log(libro1.devolver());

console.log(libro2.devolver());
console.log(libro2.prestar());
console.log(libro2.devolver());

