import React,{useState} from 'react'

export const AddMovie = ({setPeliculas}) => {
    const [pelicula, setPelicula] = useState({id:0,nombre:'',imagen:'',informacion:''})
    const {nombre,imagen,informacion}=pelicula;
    const cambiar=({target})=>{
       setPelicula({...pelicula,[target.name]:target.value})
    }
    const manejarSubmit=(e) =>{
        e.preventDefault();
        const id1=Math.floor(Math.random()*(10000000))
        setPelicula({...pelicula,id:id1});
        setPeliculas(peli=>[...peli,pelicula]);
        setPelicula({id:0,nombre:'',imagen:'',informacion:''})
        console.log(pelicula);
    }
    return (
        <div>
            <form onSubmit={manejarSubmit}>
            <input
                type="text"
                name="nombre"
                placeholder="Ingrese el nombre de la película"
                value={nombre}
                className="form-group"
                onChange={cambiar}
                cols="50"
            />
            <br/>
            <input
                type="text"
                name="imagen"
                placeholder="Ingrese el link de la imagen"
                value={imagen}
                className="form-group"
                onChange={cambiar}
                cols="50"
            />
            <br/>
            <textarea
                
                name="informacion"
                placeholder="Ingrese informacion de la pelicula"
                value={informacion}
                className="form-group"
                row="10" cols="23"
                onChange={cambiar}
            />
            <br/>
            <button className="btn btn-primary" type="submit">Insertar</button>
            <br/>
            </form>
        </div>
    )
}
