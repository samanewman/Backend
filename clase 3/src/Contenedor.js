const fs = require('fs');

class Contenedor{

    constructor (nombrearchivo){
        this.nombrearchivo = nombrearchivo;
    }

    async getAll() {
        try {
          const objs = await fs.promises.readFile(this.nombrearchivo, 'utf-8')
          return JSON.parse(objs)
        } catch (error) {
          return []
        }
      }

    async save(producto){
        const objs = await this.getAll()
        let newId;   
        if(objs.length == 0){   
            newId = 1
        } else {    
            newId = objs[objs.length - 1].id + 1 
        }
            
        const newObj = {...producto, id: newId}
        objs.push(newObj)   
        try {
            fs.promises.writeFile(this.nombrearchivo, JSON.stringify(objs, null, 2))
            return newId
        } catch (error) {
            console.log(error)
        }
             
        }
       

    getByID(id){
       const objs = await this..getAll()
        const buscado = objs.find (o => o.id ==id)
        return buscado
    }

    deleteByID(id){
        const objs = await this.getAll()
        const index  =  objs.findIndex (o => o.id ==id)
        if(index == -1){
            throw new Error (`No es posible borrar, el id ${id} no existe`)
        }
        objs.splice(index, 1)
        try{
            await fs.writeFile(this.archivo, JSON.stringify (objs, null, 2))
        }catch (error){
            throw new Error (`No es posible borrar ${error}`)

        }
    }

    deleteAll(){
        await fs.writeFile(this.archivo, JSON.stringify (objs, null, 2))
    }
};

module.exports = Contenedor;