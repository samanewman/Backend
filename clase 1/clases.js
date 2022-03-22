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
        console.log(this.mascotas);
    }
    
    countMascotas(){
        console.log((this.mascotas).length);
    }
    
    addBook(addnombre, addautor){
        (this.libros).push({nombre: addnombre, autor: addautor});
        console.log(this.libros);
    }
    
    getBookNames(){
       for(const n in this.libros){
           console.log(this.libros[n].nombre);
       };
    
    }
    

};


const cliente1 =  new cliente (
    nombre = "Pepe",
    apellido = "Grillo",
    libros = [
                {nombre: "Duma Key", autor: "Stephen KIng"},
                {nombre: "Dark Tower", autor: "Stephen King"},
                {nombre: "La mujer ducha", autor: "Juan Sasturain"},
            ],
    mascotas = ["Firu", "Satanás", "Fatiga"],
)

cliente1.getFullName();
cliente1.addMascota("Sultán");
cliente1.countMascotas();
cliente1.addBook("Crónicas marcianas", "Ray Bradbury");
cliente1.getBookNames();


