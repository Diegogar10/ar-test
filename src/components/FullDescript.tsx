import imageback from './../assets/images/histories1.jpg'
import { useInView } from 'react-intersection-observer';
import './FullDescript.scss'; 

const FullDescript = ({
  urlImage = imageback,
  title = 'titulo',
  titleLarge = 'titulo largo',
  description = 'lorem descripo asjdklsnskdl aksdklsdndfkds AKDklnd kSDKLSDL',
  animationSide = 'right'
}) => {

  const [ref, inView] = useInView({ threshold: 0.4})

  return (
    <article ref={ref} className={inView?'history__container animate':'history__container'}>
      <figure className={inView? `animate__${animationSide}`:`${animationSide}`}>
        <img src={urlImage} alt={title} />
      </figure>
      <div className={`text__container ${animationSide}`} role="text description">
        <div className={inView?'animate':''}>
          <h3>{title}: <br/> {titleLarge} </h3>
          <p>{description}</p>
        </div>
      </div>
    </article>
  )
}

export default FullDescript;