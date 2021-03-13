import React, { useEffect, useState } from 'react'

function Example() {
    const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
    return (
        <div>
            <h1>{ document.title }</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
            Click me
            </button>
        </div>
    )
}

export default Example
