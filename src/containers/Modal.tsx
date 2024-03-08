import ReactDOM from 'react-dom';
import { useContext } from 'react';
import { ContextApp } from '../Context';
import { info }  from './../assets/data/';
import './Modal.scss';


const Modal = ({handleModal} : {handleModal: VoidFunction}) => {

  const elementHTML: Element | HTMLElement | any = document.getElementById('modal');
  const { videoId } = useContext(ContextApp);
  
  return ReactDOM.createPortal(
    <div className='modal__container' onClick={handleModal}>
      <iframe width="840" height="472" src={info.videosGalery[videoId].urlVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    ,elementHTML);
}

export default Modal;