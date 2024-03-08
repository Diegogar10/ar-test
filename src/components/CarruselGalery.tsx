import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './CarruselGalery.scss';
import { useRef, useState } from 'react';

interface tipoAptoObj {
  nameProject: string,
  urlImage: string,
  title: string,
  description: {
    rooms: number,
    bath: number,
    areaTotal: number,
    areaPrivate: number,
    price: number
  }
}

const CarruselGalery = (
    {
      aptos,
      side
    }:{
      aptos: Array<tipoAptoObj>
      side?: boolean
    }
  ) => {

    const [ num, setNum ] = useState(0);
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const containerNewRef = useRef(null);
    const element3: Element = containerNewRef.current?.children[0];

    const efectScroll = (element1, element2, element3) => {
      element1.scrollIntoView({ behavior:'smooth'});
      setTimeout(()=> {
        element2.scrollIntoView({});
        element3.scrollIntoView({block:'end', behavior:'smooth'});
      },1000)
    }
    
    const handleAncla = (e: Event) => {
      e.preventDefault();
      const index = e.target?.getAttribute('data-info');
      const element1: Element = containerRef.current?.children[index];
      const element2: Element = textRef.current?.children[index];
      efectScroll(element1, element2, element3);
      setNum(index);
    }

    const handleButtonAdd = () => {
      let element1: Element ;
      let element2: Element ;
      let index: number;
      if(num == 2){
        index = 0;
      } else {
        index = num + 1;
      }
      element1 = containerRef.current?.children[index];  
      element2 = textRef.current?.children[index];  
      efectScroll(element1, element2, element3);
      setNum(index);
    }

    const handleButtonAbs = () => {
      let element1: Element ;
      let element2: Element ;
      const element3: Element = containerNewRef.current?.children[0];
      let index: number;
      if(num == 0){
        index = 2;
      } else {
        index = num - 1;
      }
      element1 = containerRef.current?.children[index];  
      element2 = textRef.current?.children[index];  
      efectScroll(element1, element2, element3);
      setNum(index);
    }

    const numberWithCommas = (number:number) => {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");
    }

  return (
    <section className={side ? 'carrusel__container right' : 'carrusel__container'}>
      <div className='carrusel__menu'>
        <menu className='menu__container'>
          {
            aptos.map((item, index:number) => 
              <li className={num == index ? 'visited' : ''} key={index}><a href='' data-info={index} onClick={handleAncla}>{item.title}</a></li>
            )
          }
        </menu>
        <div className='menu__buttons'>
          <button onClick={handleButtonAbs}><ArrowForwardIosIcon/></button>
          <button onClick={handleButtonAdd} ><ArrowForwardIosIcon/></button>
        </div>
      </div>
      <div className='carrusel__etapa'>
        <h3>{aptos[0].nameProject}</h3>
      </div>
      <div className='carrusel__images'>
        <div ref={containerRef} className='carrusel__static'>
        {
          aptos.map((item, index: number) =>           
            <figure key={index} className='images__container'>
              <img src={item.urlImage} alt={`image ${item.title}`} />
            </figure>
          )
        }
        </div>
      </div>
      <div ref={containerNewRef} className='carrusel__information'>
        <div ref={textRef} className="information__static">
        {
          aptos.map((item, index: number) =>          
              <div key={index} className='information__container'>
                <h3>{item.title}<span>2</span></h3>
                <div className='data__container'>
                  <div className='price data__info'>
                    <h4>Precio desde</h4>
                    <h3>${numberWithCommas(item.description.price)}</h3>
                    <h5> COP </h5>
                  </div>
                  <div className='area'>
                    <div className='done data__info'>
                      <h4>Área construida</h4>
                      <h3>{ item.description.areaTotal }</h3>
                      <h5>mts<span>2</span> </h5>
                    </div>
                    <div className='private data__info'>
                      <h4>Área privada</h4>
                      <h3>{ item.description.areaPrivate }</h3>
                      <h5>mts<span>2</span> </h5>
                    </div>
                  </div>
                  <div className='spaces'>
                    <div className='rooms data__info'>
                      <h4>Habitaciones</h4>
                      <h3>{ item.description.rooms }</h3>
                    </div>
                    <div className='bathrooms data__info'>
                      <h4>Baños</h4>
                      <h3>{ item.description.bath }</h3>
                    </div>
                  </div>
                  <div className='button'>
                    <button>Cotiza y seprar</button>
                  </div>
                </div>
              </div>
          )
        }
        </div>
      </div>
    </section>
  )
}

export default CarruselGalery;