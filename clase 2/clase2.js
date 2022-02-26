const fs = require('fs');

class contenedor{

    constructor (nombrearchivo){
        this.nombrearchivo = nombrearchivo;
    }

    save(producto){
        fs.promises.readFile(this.nombrearchivo, 'utf8')
        .then( archivo => {
            
            let json = JSON.parse(archivo)
            //let ultimo = json.lenght 
            //acá necesito ayuda, busqué en stack y me decía que use ObjectKey.(json).lenght 
            //pero igual no logro que me traiga el lenght. ¿Será por el formato de mi json?
            //producto.id = ultimo
            json.push(producto)
            let addproducto = JSON.stringify(json, null, 2)

            fs.promises.writeFile(this.nombrearchivo, addproducto)
                .then(res =>{
                    console.log(`Se grabó con éxito el cambio en el archivo, el ID del producto es ${producto.id}`)
                })
                .catch(()=>{
                    console.log("Error al grabar archivo")

                })
        })
       
        .catch(error =>{
            console.log("Error al leer achivo")
        })

    }

    getByID(id){
        fs.promises.readFile(this.nombrearchivo, 'utf8')
        .then(archivo => {

            let json = JSON.parse(archivo)
            let idproducto = json.findIndex(ind => ind.id === id)
            if (idproducto !== -1){
                console.log(json[idproducto])
            }
            else {
                console.log(null)
            }

        })
        .catch(error =>{
            console.log("Error al leer achivo")
        })
    }

    deleteByID(id){
        fs.promises.readFile(this.nombrearchivo, 'utf8')
        .then(archivo => {

            let json = JSON.parse(archivo)
            let idproducto = json.findIndex(ind => ind.id === id)
            if (idproducto !== -1){
                json.splice(idproducto, 1)
                let delProducto = JSON.stringify(json, null, 2)
                fs.promises.writeFile(this.nombrearchivo, delProducto)
                .then(res =>{
                    console.log(`Se eliminó con éxito el producto es ${id}`)
                })
                .catch(()=>{
                    console.log("Error al eliminar archivo")

                })
            }
            else {
                console.log(null)
            }

        })
        .catch(error =>{
            console.log("Error al leer achivo")
        })
    }

    deleteAll(){
        fs.promises.writeFile(this.nombrearchivo, '[]')
        .then((res) => {
            console.log('Se ha borrado el contenido del archivo')
        })
        .catch(() => {
            console.log('Error al intentar borrar el contenido del archivo')
        })
    }
};

const archivo = new contenedor(
    nombrearchivo = 'productos.json'
)

let producto = {
    id: 7,
    nombre: "tazón",
    precio: 300
}


archivo.save(producto);
archivo.getByID(1);
archivo.deleteByID(6);
archivo.deleteAll();