import React from 'react'
import './styles/Button.css'

const Button = ({handleNewQuote}) => {

  return (

    <div className='reload'><button type='button' onClick={handleNewQuote} className='Button'><i className='bx bx-refresh icon'></i></button></div>

  )
}

export default Button