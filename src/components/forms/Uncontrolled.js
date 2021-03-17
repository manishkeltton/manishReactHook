import React, { useRef, useState } from 'react'

const Uncontrolled = () => {

    const [show,setShow] = useState(false);
    //it like a useSate only and its preserve the value but No re-render
    const luckyName = useRef(null)

    const submitForm = (e) => {
        e.preventDefault();
        const name = luckyName.current.value;
        name === "" ? alert("plz fill the data") : setShow(true);
    }

    return (
        <div>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="luckyName">enter your luckyName</label>
                    <input type="text" id="luckyName" ref={ luckyName }></input>
                </div>
                <br />
                <button>submit</button>
            </form>
            <p>{show ? `your lucky name is ${luckyName.current.value}`: ""}</p>
        </div>
    )
}

export default Uncontrolled
