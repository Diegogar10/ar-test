import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PinDropIcon from '@material-ui/icons/PinDrop';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

import './Contact.scss';

const Contact = () => {
  return(
    <section className='contact__container'>
      <form className='contact__form' action="">
        <h3>Te contactamos</h3>
        <p>¡Nos complace ayudarte a encontrar tu nuevo hogar! Déjanos tus datos y en breve nos pondremos en contacto contigo.</p>
        <div className='contact__inputs'>
          <div>
            <label htmlFor="name">Nombre y apellido *</label>
            <input type="text" placeholder='Nombre y apellido' name='name'/>
          </div>
          <div>
            <label htmlFor="email">Correo electrónico *</label>
            <input type="email" placeholder='Correo electrónico' name='email' />
          </div>
          <div>
            <label htmlFor="phone">Teléfono de contacto *</label>
            <input type="tel" name='phone' />
          </div>
          <button>Enviar</button>
        </div>
      </form>
      <article className='contact__info'>
        <h3>Visita nuestro apartamento modelo</h3>
        <p><WhatsAppIcon/>3133245277 - 3133245477</p>
        <p><PinDropIcon/>Carrera 6, Camino. El Centello, Cajicá, Cundinamarca, Colombia</p>
        <p><QueryBuilderIcon/>Horarios de atención: Lunes a domingo de 9:00 am a 5:00 pm</p>
      </article>
    </section>
  )
}

export default Contact;