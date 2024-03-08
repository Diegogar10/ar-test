import { useState } from 'react';
import Video from '../components/Video';
import Modal from './Modal';
import { info }  from './../assets/data/';
import './Galery.scss';

interface ObjetoVideo  {
    title: string,
    urlVideo: string,
    altVideo: string,
    urlPortada: string
}

const Galery = () => {

  const [ visibleModal, setVisibleModal ] = useState(false);

  const handleModal = () => {
    if(!visibleModal){
      window.location.href = '#root';
    } else {
      window.location.href = '#galeria';
    }
    setVisibleModal(!visibleModal);
  }

  return(
    <>
      <section className='video__reviews' id='galeria' onClick={handleModal}>
        <h2>Videos de nuestra experiencia</h2>
        <div className='videos__container'>
          {info.videosGalery.map(( item: ObjetoVideo , index: number ) =>
            <Video
              key={index}
              id={index}
              urlImage={item.urlPortada}
              altImage={item.altVideo}
              title={item.title}
            />
          )}
        </div>
      </section>
      {
        visibleModal && <Modal 
          handleModal={handleModal}
        />
      }
    </>
  )
}

export default Galery;