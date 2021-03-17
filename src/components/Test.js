import React, { useEffect, useState } from 'react'
import useCustomHook from './customHook/useCustomHook';

const Test = () => {

    const [countn, setCountn] = useState(0);

    useCustomHook(countn);

    return (
        <div>
            <h1>{countn}</h1>
            <button onClick={() => setCountn(countn + 1)}>Click Test</button>
        </div>
    )
}

export default Test
