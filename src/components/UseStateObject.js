import React, { useState } from 'react'

const UseStateObject = () => {
    const [myObject, setMyObject] = useState({name: 'Manish', myAge: 24, degree: 'MCS'});
    const changeObject = () =>{
        setMyObject({...myObject, myAge: 28});
    }
    return (
        <div>
            <h1>Name: {myObject.name}  and Age: {myObject.myAge} and Degree: {myObject.degree}</h1>
            <button onClick={changeObject}>update</button>
        </div>
    )
}

export default UseStateObject
