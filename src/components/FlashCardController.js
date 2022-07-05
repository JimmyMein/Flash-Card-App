

function CardControls({addLayer, layer, cardLayers }) {
  return (  
    <form className='controls'>
        <textarea 
        name="card"  
        value={cardLayers}
        ></textarea>
        <button  onClick={addLayer}> Add Card
    
        </button>

  </form>
  )
}


export default CardControls