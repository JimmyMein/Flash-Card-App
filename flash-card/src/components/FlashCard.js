import { useState, useEffect } from 'react'
import CardControls from './FlashCardController.js'
import FlashCardSwitch from './FlashCardSwitch.js'
function FlashCard() {
  const [cardLayers, setCardLayers] = useState(null)


  function getCardlayers() {
    fetch('/cardLayers')
    .then(res => res.json())
    .then(res => setCardLayers(res.cardLayers))
  }

  function updateCardLayers() {
    if(cardLayers !== null){
      fetch('/cardLayers', {
        method: 'POST',
        headers: {'Content-type': 'application/json' },
        body: JSON.stringify({ cardLayers })

      })
    }
  }

  useEffect(getCardlayers, [])
  useEffect(updateCardLayers, [cardLayers])

 const addLayer = layer => {
  setCardLayers([...cardLayers, layer])
  }

 const removeLayer = indexOfLayerClicked => {
    const newLayers = cardLayers.filter(
      (layer, i) => i !== indexOfLayerClicked)
      setCardLayers(newLayers)
  }

  return (
    <div className="Card">
      <h1>Make your own Card!</h1>
      <CardControls
        addLayer={addLayer}
      />
      <FlashCardSwitch
        cardLayers={cardLayers}
        removeLayer={removeLayer}
        />

    </div>
  )
 
}

export default FlashCard