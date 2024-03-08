import logoBlanco from './../assets/images/logo-blanco.png';
import lemaBlanco from './../assets/images/lema-blanco.png';
import './Intro.scss';

const Intro = () => {
  return (
    <section className="intro__project" id='intro'>
      <div className="project__title">
        <h1>RESERVA DE CAJICÁ</h1>
        <h2>Etapa 2</h2>
      </div>
      <div className="project__owner">
        <figure>
          <img src={logoBlanco} alt="logo en blanco ar construcciones" />
        </figure>
        <figure>
          <img src={lemaBlanco} alt="45 años de sueños construidos" />
        </figure>
      </div>

    </section>
  )
}

export default Intro;