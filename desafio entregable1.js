const calles = [];

const agregarCalles = () => {
    let salir = false
    do {
        let calle = prompt(`Ingrese el nombre de una calle, escriba salir para cerrar`).toLowerCase()
        if(calle === 'salir') break
        calles.push(calle)
        if (calles.length === 5) {
            for (const xx of calles) {
                console.log(`usted eligio la calle ${xx}`)
            }
            break
        }
    } while (!salir);
    console.log(calles)
}

const eliminarCalle = () =>{
    let calleAEliminar = prompt(`Elija la calle que desea eliminar dentro de estas opciones: ${calles.join(',')}`)
    const eleccion = calles.findIndex( x => x === calleAEliminar)
    calles.splice( eleccion, 1)
    console.log(calles)
}

const verRepetidas = () => {
    let pregunta = prompt(`Elija la calle que desea buscar duplicados`)
    const callesRepetidas = calles.filter(x => x === pregunta)
    console.log(`Tenes ${callesRepetidas.length} calles repetidas` )
}


// agregarCalles()
// verRepetidas()



//Concatenar Arrays con spread operator
const arr1= [1,2,3]
const arr2= [4,5,6]
const arr3 = [...arr1, ...arr2]
console.log(`El array tiene los elementos ${arr3.join(',')}`)
