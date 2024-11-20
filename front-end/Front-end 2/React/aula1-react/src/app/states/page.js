"use client"

import { useState } from "react"

export default function State(){
    const [counter, setCounter] = useState(0)
    const [text, setText] = useState("Clique agora")
    const [name, setName] = useState('')
    const [showDiv, setShowDiv] = useState(true)
    const [number, setNumber] = useState(0)

    return(
        <div>
            <button onClick={() => setCounter(counter + 1)} style={{background: "red"}}>
                <p>Voce clicou {counter} vezes</p>
            </button>
            <button onClick={() => setText("Você clicou!")} style={{background: "red"}}>
                <p>{text}</p>
            </button>
            <p>Nome: {name}</p>
            <input type="text" onChange={(a) => setName(a.target.value)}></input>
            <p>Numero: {number}</p>
            <input type="number" onChange={(a) => setNumber(a.target.value)}></input>
            <button onClick={() =>  setShowDiv(!showDiv)}>{showDiv?"Esconder":"Mostrar"}</button>
            {showDiv && (
                <div>
                    <p>Nome: {name}</p>
                </div>
            )}
        </div>
    )
}

