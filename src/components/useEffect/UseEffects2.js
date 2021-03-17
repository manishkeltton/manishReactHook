//CleanUp function

import React, { useEffect, useState } from 'react'

const UseEffects2 = () => {

    const [widthCount, setWidthCount] = useState(window.screen.width);

    const actualWidth = () =>{
        console.log(window.innerWidth);
        setWidthCount(window.innerWidth);
    }

    useEffect(() => {
            console.log("add Event")
            window.addEventListener("resize", actualWidth);
       return () => {
            console.log("remove event")
            window.addEventListener("resize", actualWidth);
    }
});

    return (
        <div>
            <p>The actual size of the window is: </p>
            <h1>{widthCount}</h1>
        </div>
    )
}

export default UseEffects2
