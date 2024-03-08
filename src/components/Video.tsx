import { useContext } from 'react';
import './Video.scss';
import { ContextApp } from '../Context';

const Video = ({
  urlImage,
  altImage,
  title,
  id,
}:{
  urlImage: string,
  altImage: string,
  title: string,
  id: number
}) => {

  const { handleVideoId } : any = useContext(ContextApp);

  return (
    <article className='video--item1' onClick={() => handleVideoId(id) } >
      <figure className='video__container'>
        <img src={urlImage} alt={altImage} />
        <div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" data-name="圖層 1" viewBox="0 0 32 32" svg-inline="" role="presentation" focusable="false"><path d="M2.24 12a14.32 14.32 0 0127.52 0h1.74a16 16 0 00-31 0zm27.52 8a14.32 14.32 0 01-27.52 0H.5a16 16 0 0031 0z"></path></svg>
          </button>
        </div>
      </figure>
      <div className='text__title'><div></div>{title}</div>
    </article>
  )
}

export default Video;