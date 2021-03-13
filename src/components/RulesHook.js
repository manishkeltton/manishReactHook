// 1: Always write it inside the functional component or function , Don't write inside 
//    regular function 
// 2: component name must be PascalCase (first letter should be uppercase)
// 3: we can directly import or directly write it using React.hookName.
// 4: Don't call Hooks inside loops, condition, or nested functions.

import React, { useState } from 'react'

const RulesHook = () => {
    const [myName, setmyName] = useState("Manish Kumar")//React.useState()
    return (
        <div>
            <h1>{ myName }</h1>
        </div>
    )
}

export default RulesHook

