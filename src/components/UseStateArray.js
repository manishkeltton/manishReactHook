import React, { useState } from 'react'

const UseStateArray = () => {

    const bioData = [
        {
            id:0, name: "Manish", age: 24
        },
        {
            id:1, name: "Rudra", age: 25
        }
    ];

    const [data,setData] = useState(bioData);

    const clearData = () => {
        setData([])
    }
    const removeEl = (id) =>{
         //alert(id) 
         const myNewArray = data.filter((curEl) => {
             return curEl.id !== id;
         })
         setData(myNewArray);
    }

    console.log(bioData);

    return (
        <>
            {/* <h1>I am Manish</h1> */}
            {
                data.map((curEl)=>
                     <h1 key={curEl.id}>Name: {curEl.name} : Age:{curEl.age} 
                     <button onClick={() => removeEl(curEl.id)}>remove</button></h1>
                )
            }
            <button onClick={() => clearData()}>clear</button>
        </>
    )
}

export default UseStateArray
