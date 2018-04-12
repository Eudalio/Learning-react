import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member';

ReactDOM.render(
    <Family lastName='Sousa'>
        <Member name='Eudália' />
        <Member name='Eudálio' />
        <Member name='Lindermbergue' />
        <Member name='Cirlândio' />
    </Family>
    , document.getElementById('app'))