import React, { useState } from 'react'

const ShortCircuitEval = () => {
    const [demo, setDemo] = useState('');
    return (
        <div>
            <h1>{demo || "manish"}</h1>
            <h1>{demo || 
             <>
               <h1>mast</h1>
               <p>you can do anything</p>
             </>
            }</h1>
            <h1>{ demo && "Rudra"}</h1>
        </div>
    )
}

export default ShortCircuitEval
