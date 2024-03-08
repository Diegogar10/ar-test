import { useContext, useEffect, useState } from 'react';
import marco from './../assets/images/marcoAreaV2.png';
import './ImageDescript.scss';
import { ContextApp } from '../Context';

interface ZoneObject {
  nameZone: string,
  urlImage: string,
  title: string,
  description: string,
}

const ImageDescript = (props:ZoneObject) => {

  const {visible, setVisible} = useContext(ContextApp);

  useEffect(()=>{
    setTimeout(()=>{ setVisible(true)}, 200);
  },[visible]);

  return (
    <article className='image__descript'>
      <div className='image__container'>
        <figure className='image__content'>
          <img className={visible ? 'animated':''} src={props.urlImage} alt={props.nameZone} />
        </figure>
{/*         <figure className='image__marco'>
          <img src={marco} alt='marco de televisor' />
        </figure> */}
      </div>
      <div className={visible?'text__container animated':'text__container'}>
        <h2 className='text__title'>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </article>
  )
}

export default ImageDescript;