import React, { useState } from 'react'

function Source() {
    const [value, setValue]= useState(0)
    function a(){
        setValue(value+1)
    }
    function b(){
        setValue(value-1)
    }
    function c(){
        setValue(value*2)
    }
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={a}>addition</button>
        <button onClick={b}>minus</button>
        <button onClick={c}>multipliation</button>
    </div>
  )
}

export default Source