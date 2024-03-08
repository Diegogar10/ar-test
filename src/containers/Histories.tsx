import FullDescript from '../components/FullDescript';
import { info }  from './../assets/data/index.js';
import './Histories.scss';

interface historyObject {
  urlImage: string, 
  title: string, 
  titleLarge: string, 
  description: string, 
  animationSide: string
}

const Histories = () => {
  return (
    <section className="histories__container">
      <h2>El lugar donde soñaste vivir</h2>
      {info.histories.map((item: historyObject, index: number)=>
        <FullDescript
          key={index}
          urlImage= {item.urlImage}
          title= {item.title}
          titleLarge= {item.titleLarge}
          description= {item.description}
          animationSide= {item.animationSide}
        />
      )}
    </section>
  )
}

export default Histories;