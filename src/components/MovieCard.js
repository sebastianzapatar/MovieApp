import React from 'react'

export const MovieCard = ({Pelicula}) => {
    return (
        <div className="card ms-3" style={{maxWidth:340}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={Pelicula.imagen} className="card-img"
                    alt={Pelicula.id}></img>
                </div>
                <div className="card-body">
                    <h5>{Pelicula.nombre}</h5>
                    <p className="card-text">{Pelicula.informacion}</p>
                </div>
                
            </div>
        </div>
    )
}
