import React, {useEffect, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    const[colorBoton,setColorBoton]=useState("indigo")
    useEffect(() => {
        //obtener lista vehiculos backend
        setVehiculos(vehiculosBackend)
          
    }, [])

    useEffect(() => {
        if (mostrarTabla){
            setTextoBoton("Crear nuevo vehículo")
            setColorBoton("indigo")
        }else{
            setTextoBoton("Mostrar  todos los vehículos")
            setColorBoton("green")
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
                className={`text-white bg-${colorBoton}-300 p-5 rounded-full m-6 w-28 self-end`}>
                {textoBoton}
                </button>
            </div> 
                {mostrarTabla?( <TablaVehiculos listaVehiculos={vehiculos}/>
                ):( 
                <FormularioCreacionVehiculos
                fparaMostrarTabla={setMostrarTabla}
                listaVehiculos={vehiculos}
                fparaAgregarVehiculos={setVehiculos}
                />)}
            <ToastContainer
             position="top-center"
             autoClose={5000}/>;
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
const FormularioCreacionVehiculos=({fparaMostrarTabla, listaVehiculos,fparaAgregarVehiculos})=>{
    const [marca, setMarca]=useState();
    const [color, setcolor]=useState();
    const [modelo, setModelo]=useState();

    const enviarAlBackend=()=>{
        console.log("marca",marca);
        toast.success("Agregado con exito")
        fparaMostrarTabla(true)
        fparaAgregarVehiculos([
            ...listaVehiculos,
            {marca:marca,color:color,modelo:modelo},
        ])
    }
  
    return(
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-gray-600 font-bold">Crear nuevo vehículo</h2>
            <form className="flex flex-col">
                <label className="flex flex-col" htmlFor="marca">
                    Marca:
                    <input className="bg-gray-50 border border-gray-500 p-2 rounded-lg m-2"
                     type="text"
                     placeholder="corolla"
                     name="marca"
                     value={marca}
                     onChange={(e)=>{
                         setMarca(e.target.value)
                     }}
                     ></input>
                </label>
                <label className="flex flex-col" htmlFor="color">
                    Color: 
                    <select name="color"
                    className="bg-gray-50 border border-gray-500 p-2 rounded-lg m-2"
                    value={color}
                     onChange={(e)=>{
                         setcolor(e.target.value)
                     }}
                    >
                        <option disabled>Seleccione una</option>
                        <option>Rojo</option>
                        <option>Negro</option>
                        <option>Verde</option>
                    </select>
                </label>
                <label className="flex flex-col" htmlFor="modelo">
                    Modelo:
                    <input className="bg-gray-50 border border-gray-500 p-2 rounded-lg m-2"
                     type="number"
                     min={1992}
                     max={2023}
                     placeholder="corolla"
                     name="modelo"
                     value={modelo}
                     onChange={(e)=>{
                         setModelo(e.target.value)
                     }}
                     ></input>
                </label>      
                
                <button 
                    type="button"                
                    className="col-span-2 bg-green-500 p-2 rounded-full shadow-md"
                    onClick={()=>{
                        enviarAlBackend();
                    }}
                >
                Guardar vhiculo
                </button>
            </form>
        </div>
    )
}

export default Vehiculos
