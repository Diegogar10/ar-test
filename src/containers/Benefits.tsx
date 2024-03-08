import VideoDescript from '../components/VideoDescript';
import { info } from './../assets/data';
import fondo from './../assets/images/fondo.png';
import './Benefits.scss';

interface vidObj {
  urlVideo: string,
  title: string,
  description: string,
  positionSide: boolean
}

const Benefits = () => {
  return (
    <section className="benefits__container">
      <figure className='photo__background'>
        <img src={fondo} alt="fondo" />
      </figure>
      <h2>AR CONTRUCCIONES A TU MEDIDA</h2>
      <h3>Beneficios que hacen único a nuestro proyecto</h3>
      {
        info.beneficios?.map((item: vidObj, index: number ) =>
          <VideoDescript 
            key={index}
            urlVideo={item.urlVideo} 
            title={item.title} 
            descript={item.description} 
            positionSide={item.positionSide}            
          />
        )
      }
    </section>
  )
}

export default Benefits;