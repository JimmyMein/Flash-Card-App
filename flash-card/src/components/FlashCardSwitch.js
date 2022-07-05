
function FlashCardSwitch ({ cardLayers, layer, removeLayer}) {
  return (
    <section className='layers'>
      {cardLayers && cardLayers.map((layer, index) =>
        <img key={index}
        className={layer}
        onClick={() => removeLayer(index)}
        />
      )}
    </section>

  )
}

export default FlashCardSwitch 