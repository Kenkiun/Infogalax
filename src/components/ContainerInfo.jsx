import React from 'react'
import Button from './Button'
import './styles/ContainerInfo.css'

const ContainerInfo = ({quote, handleNewQuote, BgImagePlanet}) => {

  return (

    <section className='containerInfo'>

        <h1 className='containerInfo__title'>INFOGALAX</h1>
        
        <article className='containerInfo__Phrase'>
            <p>{quote.phrase}</p>
        </article>

        <Button handleNewQuote={handleNewQuote}/>

        <article className='containerInfo__Author'>
            <h4>author: {quote.author}</h4>
        </article>

        <div className={`${BgImagePlanet}`}></div>

    </section>
  )
}

export default ContainerInfo