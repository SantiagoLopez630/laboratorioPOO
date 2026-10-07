class Estudiante { //Remplazar la palabra "class" por "function" y eliminar el constructor para que sea una función constructora
  constructor(nombre, edad, curso, aprobado) {
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
    this.aprobado = aprobado;

      if (this.aprobado>=3.0) {
    this.aprobado = true;
  } else {
    this.aprobado = false;
    }
  };

  
  resultado() {

    if (this.aprobado == true) {
      this.aprobado = "Aprobado";
    } else {
      this.aprobado = "Reprobado";
    }

    return `Hola, soy ${this.nombre}, tengo ${this.edad} años, estoy en el curso de ${this.curso} y mi estado de aprobación es: ${this.aprobado}.`;
}
}

const estudiante1 = new Estudiante("Juan", 20, "Matemáticas", 3.5);
const estudiante2 = new Estudiante("María", 22, "Física", 2.8);

console.log(estudiante1.resultado());
console.log(estudiante2.resultado());