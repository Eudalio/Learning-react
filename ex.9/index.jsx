import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'

ReactDOM.render(
    <ClassComponent label='Contador' initialValue={5} />
    , document.getElementById('app'))