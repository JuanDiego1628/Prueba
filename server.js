//importe  de express tradicional:
// const express= require('express')

import Express  from "express";
import { MongoClient } from "mongodb";

const stringConexion= "mongodb+srv://juandiego1628:16281530@proyectoapp.tv3zk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client= new MongoClient(stringConexion,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

let conexion;
const app=Express();
app.use(Express.json());

app.get("/ventas",(req,res)=>{
    console.log("alguien hizo get en la ruta /ventas")
    const ventas=[
        { id_venta:"023",fecha:"20/03/1999",producto:3,id_cliente:"034",vendedor:"pedro",cantidad:34,precio:34556},
        { id_venta:"023",fecha:"20/03/1999",producto:3,id_cliente:"034",vendedor:"pedro",cantidad:34,precio:34556},
        { id_venta:"023",fecha:"20/03/1999",producto:3,id_cliente:"034",vendedor:"pedro",cantidad:34,precio:34556},
        { id_venta:"023",fecha:"20/03/1999",producto:3,id_cliente:"034",vendedor:"pedro",cantidad:34,precio:34556},
        { id_venta:"023",fecha:"20/03/1999",producto:3,id_cliente:"034",vendedor:"pedro",cantidad:34,precio:34556},
        { id_venta:"023",fecha:"20/03/1999",producto:3,id_cliente:"034",vendedor:"pedro",cantidad:34,precio:34556},
        { id_venta:"023",fecha:"20/03/1999",producto:3,id_cliente:"034",vendedor:"pedro",cantidad:34,precio:34556}
    ]
    res.send(ventas)

});

app.post("/ventas/nueva",(req,res)=>{
   
    const datosVentas=req.body
    console.log("llaves",Object.keys(datosVentas))
     try{
        if(Object.keys(datosVentas).includes("id_venta") &&
            Object.keys(datosVentas).includes("fecha") &&
            Object.keys(datosVentas).includes("producto") &&
            Object.keys(datosVentas).includes("id_cliente") &&
            Object.keys(datosVentas).includes("vendedor") &&
            Object.keys(datosVentas).includes("cantidad") &&
            Object.keys(datosVentas).includes("precio")
            ){
                //impementar codigo para crear venta en la base datos
                conexion.collection("ventas").insertOne(datosVentas,(err,result)=>{
                    if(err){
                        console.error(err)
                        res.sendStatus(500);
                   }else{
                       console.log(result)
                       res.sendStatus(200);
                   }

                });
                res.sendStatus(200);
                }else{
                res.sendStatus(500);
                }
    }catch{
        res.sendStatus(500);
    }
    
    
});





const main=()=>{
    client.connect((err,db)=>{
        if(err){
            console.error("error al conectar  la base de datos")
        }
        conexion=db.db("Pioneros");
        console.log("conexion existosa")
        return app.listen(5000,()=>{
            console.log("Escuchando el puerto 5000")
            });
    })
    
};
main();
