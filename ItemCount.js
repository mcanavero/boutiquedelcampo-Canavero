import React, { useState } from "react";

function ItemCount(){
    const [stock, setStock ] = useState(5);
    const [count, setCount] = useState(1);

    

    const  addCount= () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const  subCount= () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    const onAdd = () => { 
        console.log(`Agregaste ${count} productos al carrito.`) }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={subCount}>-</button>
            <button onClick={addCount}>+</button>
            <br></br>
            <button onClick={onAdd} > Agregar a carrito</button>
        </div>
    )

}

export default ItemCount