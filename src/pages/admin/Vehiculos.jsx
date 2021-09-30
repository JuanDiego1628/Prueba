import React, {useEffect, useState} from 'react'
const vehiculosBackend=[
    {
        marca:"corolla",
        color:"Toyota",
        modelo:2006
    },
    {
        marca:"corolla",
        color:"Toyota",
        modelo:2006
    },
    {
        marca:"corolla",
        color:"Toyota",
        modelo:2006
    },
    {
        marca:"corolla",
        color:"Toyota",
        modelo:2006
    },
    {
        marca:"xcorolla",
        color:"Toyota",
        modelo:2006
    }
]

const Vehiculos = () => {
    const[mostrarTabla,setMostrarTabla]=useState(false);
    const[textoBoton, setTextoBoton]=useState("Crear nuevo vehiculo");
    const[vehiculos,setVehiculos]=useState([])
    useEffect(() => {
        //obtener lista vehiculos backend
        setVehiculos(vehiculosBackend)
          
    }, [])

    useEffect(() => {
        if (mostrarTabla){
            setTextoBoton("Crear nuevo vehículo")
        }else{
            setTextoBoton("Mostrar  todos los vehículos")
        }
    }, [mostrarTabla])
    return (
        <div className="flex h-full w-full flex-col justify-start items-center">
            <div className="flex flex-col "> 
                <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Página de administración de vehiculos</h2>
                
                <button
                onClick={()=>{
                    setMostrarTabla(!mostrarTabla);
                }}
                className="text-white bg-indigo-300 p-5 rounded-full m-6 w-28 self-end">
                {textoBoton}
                </button>
            </div> 
                {mostrarTabla? <TablaVehiculos listaVehiculos={vehiculos}/>: <FormularioCreacionVehiculos/>}
            
        </div>
    )
}
const TablaVehiculos=({listaVehiculos})=>{
    useEffect(() => {
        
            console.log("Esta es la lista de vhiculos",listaVehiculos)
        
    }, [listaVehiculos])
    return(
        <table>
            <thead className="m-3">
                <tr>
                  <th>Marca</th> 
                  <th>Color</th> 
                  <th>Modelo</th> 
                </tr>
            </thead>
            <tbody>
                {listaVehiculos.map((vehiculo)=>{
                    return(
                    <tr>
                        <td>{vehiculo.marca}</td>
                        <td>{vehiculo.color}</td>
                        <td>{vehiculo.modelo}</td>
                    </tr>
                    );
                })}                             
            </tbody>
        </table>
    )
}
const FormularioCreacionVehiculos=()=>{
    return(
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-gray-600 font-bold">Crear nuevo vehículo</h2>
            <form className="grid grid-cols-2">
                <input className="bg-gray-50 border border-gray-500 p-2 rounded-lg m-2" type="text"></input>
                <input className="bg-gray-50 border border-gray-500 p-2 rounded-lg m-2" type="text"></input>
                <input className="bg-gray-50 border border-gray-500 p-2 rounded-lg m-2" type="text"></input>
                <input className="bg-gray-50 border border-gray-500 p-2 rounded-lg m-2" type="text"></input>
                <button className="col-span-2 bg-green-500 p-2 rounded-full shadow-md">Guardar vhiculo</button>
            </form>
        </div>
    )
}

export default Vehiculos
