import Envelope from '../../svg/svg_icons/Envelope'
import LocationDot from '../../svg/svg_icons/LocationDot'
import Whatsapp from '../../svg/svg_icons/Whatsapp'

import Section from '../Section/Section'

import './Contact.css'

function Contact() {
    return (
        <Section>
            <div className='div--contact'>Contato</div>
            <div className='div--contact-info'>
                <div className='div--contact-info-detail'>
                    <Whatsapp />
                    <p>&#40;92&#41; 98516-7008</p>
                </div>
                <div className='div--contact-info-detail'>
                    <Envelope />
                    <p>eduardofcruz12@gmail.com</p>
                </div>
                <div className='div--contact-info-detail'>
                    <LocationDot />
                    <p>Manaus - Amazonas - Brasil</p>
                </div>
            </div>
        </Section>
    )
}

export default Contact