import React, { useEffect, useState } from 'react'
import useCustomHook from '../customHook/useCustomHook';



const UseEffects1 = () => {

    const [countn, setCountn] = useState(0);//useState woorking for re-render of whole component

    useCustomHook(countn);// [] -> it means useEffect run at one time 
                // & [countn] -> it means useEffect run at a every moment when will change countn values

        useEffect(()=>{
            console.log("other useEffect")
        })
        console.log('Hello outWorld');
    
    const handlechange = () => {
        setCountn(countn+1)
    }

    return (
        <div>
            <h1>{countn}</h1>
            <button onClick={() => handlechange()}>Click me</button>
        </div>
    )
}

export default UseEffects1
