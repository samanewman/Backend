class cliente{
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this. apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;

    }

    getFullName(){
        console.log(` Nombre y apellido: ${this.nombre}, ${this.apellido}`);
    }
    
    addMascota(nombremascota){
        (this.mascotas).push(nombremascota);
    }
    
    countMascotas(){
        console.log((this.mascotas).length);
    }
    
    addBook(addnombre, addautor){
        (this.libros).push(nombre = addnombre, autor = addautor);
    }
    
    getBookNames(){
        console.log(this.libros.nombre);
    }
    

}






const cliente1 =  new cliente (nombre, apellido, libros, mascotas){
    nombre = "Pepe",
    apellido = "Grillo",
    libros = [
                {nombre: "Duma Key", autor: "Stephen KIng"},
                {nombre: "Dark Tower", autor: "Stephen King"},
                {nombre: "La mujer ducha", autor: "Juan Sasturain"}
            ],
    mascotas = ["Firu", "Satanás", "Fatiga"]

}
cliente1.getFullName();
cliente1.addMascota("Sultán");
cliente1.countMascotas();
cliente1.addBook("Crónicas marcias", "Ray Bradbury");
cliente1.getBookNames();


