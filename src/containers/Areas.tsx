import { useContext, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { info } from './../assets/data/';
import ImageDescript from '../components/ImageDescript';
import './Areas.scss';
import { ContextApp } from '../Context';

interface ZoneObject {
  nameZone: string,
  urlImage: string,
  title: string,
  description: string
}

const Areas = () => {

  const [ref, inView] = useInView({ threshold: 0.5});
  const [isSelected, setIsSelected] = useState(0);
  const { setVisible } = useContext(ContextApp);
  const data = info.zonas[isSelected];

  const handleButton = (e:Event, index:number)=> {
    setVisible(false);
    e.preventDefault();
    setIsSelected(index);
  }

  return (
    <section className='list__horizontal'>
      <div className={inView?'background animated':'background'} role='background animado'></div>
      <div className='main__content'>
        <h2>Zonas comúnes</h2>
        <nav className='list__nav'>
          {info.zonas?.map(( item: ZoneObject, index: number ) => 
            <ul key={index} className='nav__container'>
              <li><a href="" className={ isSelected == index ? 'selected' : '' } onClick={(e)=>{handleButton(e, index)}}>{item.nameZone}</a></li>
            </ul>
          )}
        </nav>
        <div ref={ref} className='list__item'>
          <ImageDescript
            {...data}
          />
        </div>
      </div>
    </section>
  )
}

export default Areas;