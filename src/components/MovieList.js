import React,{useState} from 'react'
import { AddMovie } from './AddMovie'
import { MovieCard } from './MovieCard'
import {peliculas} from '../data/peliculas'
export const MovieList = () => {
    
    const [peliculas1, setPeliculas] = useState(peliculas);
    return (
        <div className="container ">
           <AddMovie setPeliculas={setPeliculas}/>
            <div className="d-inline-flex p-2">
            {peliculas1.map(Pelicula=>{
               return( <MovieCard key={Pelicula.id} Pelicula={Pelicula} />)
            })}
            </div>
            
            
        </div>
    )
}
