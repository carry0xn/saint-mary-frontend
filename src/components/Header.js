import React from 'react'
/*Imagenes*/
import logo from '../img/SAINT_MARY.png'

/*Font*/ 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Header() {
    return (
        <section className="bg-light">
            <nav className="navbar navbar-expand-lg py-2" style={{ backgroundColor: '#F8F9FA ' }}>
                <div className="container d-flex align-items-center justify-content-between">
                    <img src={logo} alt="English Institute Logo" style={{ height: '150px' }} />
                    
                    <ul className="navbar-nav d-flex flex-row align-items-center">
                    <li className="nav-item">
                        <a href="mailto:santamariaenglish2023@gmail.com" className="nav-link" style={{ color: '#00247D', fontSize: '30px', margin: '0 10px' }}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://wa.me/541155950474" className="nav-link" style={{ color: '#00247D', fontSize: '30px', margin: '0 10px' }}>
                        <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.instagram.com/saintmary.school.of.english" className="nav-link" style={{ color: '#00247D', fontSize: '30px', margin: '0 10px' }}>
                        <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    </ul>
                </div>
                </nav>
        </section>
  )
}


export default Header