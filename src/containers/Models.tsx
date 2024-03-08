import { info } from './../assets/data/';
import MosaicImages from '../components/MosaicImages';
import CarruselGalery from '../components/CarruselGalery';
import './Models.scss';

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


const Models = () => {
  
  const images: string[] = info.mosaico;
  const etapa1: Array<tipoAptoObj> = info.tiposAptos.opt1;
  const etapa2: Array<tipoAptoObj> = info.tiposAptos.opt2;

  return(
    <section className='models__container'>
      {<MosaicImages 
        images={images}        
      />}
      <div className='models__options'>
        <CarruselGalery aptos={etapa1}/>
        <CarruselGalery aptos={etapa2} side={true}/>
      </div>
    </section>
  )
}

export default Models;