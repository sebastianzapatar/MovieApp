import React,{useState} from 'react'

export const ReactividadApp = () => {
    const [persona, setPersona] = useState({nombre:null,apellido:null,edad:0});
    const {nombre,apellido,edad}=persona;
    const cambiar=({target})=>{
        setPersona({...persona,[target.name]:target.value});
        console.log(nombre);
    }
    let mensaje="";
    if(edad>18 && nombre && apellido){
        mensaje=(
            <h2>{nombre} {apellido} un sello dorado</h2>
        )
    }
    else if(edad>0 && nombre && apellido){
        mensaje=(
            <h2>{nombre} {apellido} tome frutiño mejor</h2>
        )
    }
    return (
        <div className="container">
            {mensaje}
            <input
                type="text"
                name="nombre"
                placeholder="Ingrese su nombre"
                value={nombre}
                className="form-group"
                onChange={cambiar}
            />
            <br/>    
            <input
                type="text"
                name="apellido"
                placeholder="Ingrese su apellido"
                value={apellido}
                className="form-group"
                onChange={cambiar}
            />
            <br/>
            <input
                type="text"
                name="edad"
                placeholder="Ingrese su ead"
                value={edad}
                className="form-group"
                onChange={cambiar}
            />    
        </div>
    )
}
