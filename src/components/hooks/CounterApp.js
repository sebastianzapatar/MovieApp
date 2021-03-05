import React,{useState} from 'react'

export const CounterApp = ({numero}) => {
    const [contador, setContador] = useState(numero);
    console.log("entro");
    const sumar=()=>{
        setContador(contador+1);
        console.log(contador);
    }
    const reset=()=>{
        setContador(numero);
    }
    return (
        <div>
            <h1>Contador de Clicks {contador}</h1>
            <button className="btn btn-warning" onClick={sumar}>+1</button>
            <button className="btn btn-warning" onClick={reset}>Reset</button>
        </div>
    )
}
