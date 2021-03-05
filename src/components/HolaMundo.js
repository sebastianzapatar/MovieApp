import React from 'react'
import { ComponenteDos } from './ComponenteDos';

export const HolaMundo = () => {
    let nombre="Sebastián Zapata";
    let profesion="intento de basquebolista";
    let edad=12;
    let mostar="";
    let peliculas=['El conjuro','Volver al futuro','Saw',
    'Barbey la puerta mágica','El cosito de notebook'];
    if(edad>30){
        mostar=(
            <h3>En el tercer piso, mucho cucho</h3>
        )
    }
    else if(edad>18 && edad<30){
        mostar=(
            <h3>En plena flor de la juventud</h3>
        )
    }
    else{
        mostar=(
            <h3>Vaya y tome el tetero</h3>
        )
    }
    return (
        <div className="container">
            <h1>Información </h1>
            <h2>{nombre}</h2>
            <h3>Su profesión es {profesion}</h3>
            {mostar}
            <ul>
                {peliculas.map(pelicula=>{
                    return(<ComponenteDos key={pelicula} pelicula={pelicula} /> );
                })}
            </ul>
            
        </div>
        
    )
}
