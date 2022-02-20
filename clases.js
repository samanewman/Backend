class cliente{
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this. apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;

    }
};

const cliente1 =  new cliente (nombre, apellido, libros, mascotas){
    nombre = "Pepe",
    apellido = "Grillo",
    libros = ["Duma Key", "Dark Tower", "Colorado kid"],
    mascotas = ["Firu", "Satanás", "Fatiga"],

};



getFullName(){
    console.log("Nombre y apellido:", this.cliente.nombre, this.cliente.apellido);

};

addMascota(nombremascota){
    (this.cliente.mascotas).push(nombremascota);

};

