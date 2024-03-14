import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { useInView } from 'react-intersection-observer';
import {info} from './../assets/data/';
import './MosaicCards.scss';


interface infoCard {
  urlImage: string,
  altImage: string,
  site: string
}

const MosaicCards = () => {
  const [ref, inView] = useInView({ threshold: 0.45})
  
  return(
    <div className='mosaic'>
      <div ref={ref} className="mosaic__container">
        <div className="mosaic__container--dinamic">
          {
            inView && <div className='contact__buttons'>
              <button className={inView ? '':'visible'} ><WhatsAppIcon/>Escribenos</button>
              <button className={inView ? '':'visible'} ><PhoneInTalkIcon/>Te llamamos</button>
              <button className={inView ? '':'visible'} ><TrendingUpIcon/>Cotiza y separa</button>
            </div>
          }
          <div className={inView?"aparment__container animate":"aparment__container"} role="mosaico de imagenes del apartamento">
            {
              info.aptos.map((item: infoCard, index:number)=>
                <figure className={inView?`card ${item.site}`:`card ${item.site}__animate`} key={index}>
                  <img src={item.urlImage} alt={item.altImage}/>
                </figure>
              )
            }
          </div>
        </div>
      </div>    
    </div>
  )
}

export default MosaicCards;