import React from 'react'
import { ReactDOM } from 'react';

export default function Inlinecssh() {
    const name='ashu';
//inline css
    const head ={
        color:'pink',
        backgroundColor:'black'

    }
  return (
    <div>
        <h1 style={head}>Hello, My name is:{name}</h1>
    </div>
  )
}
