
import { useState } from 'react'
import './App.css'
import ContainerInfo from './components/ContainerInfo'
import db from './db/db.json'

const images = ['bg1', 'bg2', 'bg3', 'bg4']
const images2 = ['planet1', 'planet2', 'planet3', 'planet4',]

function App() {

	const getRandomItem = (listItems) => {
		const randomIndex = Math.floor(Math.random() * listItems.length)  

		return listItems[randomIndex]
	}

	const [quote, setQuote] = useState(getRandomItem(db))
	const [bgImage, setBgImage] = useState(getRandomItem(images))
	const [BgImagePlanet, setBgImagePlanet] = useState(images2)

	const handleNewQuote = () => {
		setQuote(getRandomItem(db))
		setBgImage(getRandomItem(images))
		setBgImagePlanet(getRandomItem(images2))
	}

  return (

    <div className={`App ${bgImage}`}>

		<ContainerInfo quote={quote} handleNewQuote={handleNewQuote} BgImagePlanet={BgImagePlanet}/>

    </div>
  )
}

export default App
