import './MosaicImages.scss';

const MosaicImages = ({images}:{images:string[]}) => {
  return (
    <section className='mosaicimg__container'>
      <h2>Elige el apartamento <span>que soñaste</span></h2>
      <div className='images__container'>
        {images.map((item: string, index: number) => 
          <figure key={index}>
            <img src={item} alt={`image ${index}`} />
          </figure>
        )}
        <div className='line__decoration--top' role='line__decoration--top'></div>
        <div className='line__decoration--bottom' role='line__decoration--bottom'></div>
      </div>
    </section>
  )
}

export default MosaicImages;