import { useInView } from 'react-intersection-observer';
import './VideoDescript.scss';
import { useEffect, useRef, useState } from 'react';

interface vidObj {
  urlVideo: string,
  title: string,
  descript: string,
  positionSide: boolean
}

const VideoDescript = ({ urlVideo, title, descript, positionSide } : vidObj) => {
  
  const [ref1, inView1] = useInView({ threshold: 0.4 });
  const [ref2, inView2] = useInView({ threshold: 1 });
  const [ visble, setVisible ] = useState(false);
  const videoRef = useRef(null);
  
  useEffect(() => {
    if (!inView1) setVisible(false);
    if (inView2) {
      videoRef.current?.play();
      setVisible(true);
    } else {
      videoRef.current?.pause();
    }
  }, [inView1, inView2, visble]);

  return(
    <article ref={ref1} className={positionSide ? 'videodesc__container left' : 'videodesc__container right'}>
      <figure ref={ref2}  className='video__container'>
        <video className={visble ? 'visible' : ''} ref={videoRef} src={urlVideo}></video>
      </figure>
      <div className='description__container'>
        <h3 className={visble ? 'visible' : ''} >{ title }</h3>
        <p className={visble ? 'visible' : ''} >{ descript }</p>
      </div>
    </article>
  )
}

export default VideoDescript;