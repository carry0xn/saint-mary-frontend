/*Font*/ 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="py-4" style={{ backgroundColor: '#CF142B', color: '#FFFFFF' }}>
        <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="mb-0">Saint Mary &copy; 2025</p>
              </div>
              <div className="col-md-6 text-md-end">
                <a href="mailto:santamariaenglish2023@gmail.com" className="text-white mx-2">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="https://wa.me/541155950474" className="text-white mx-2">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="https://www.instagram.com/saintmary.school.of.english" className="text-white mx-2">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
        </div>
        </footer>
    )
  }
  
  export default Footer
  