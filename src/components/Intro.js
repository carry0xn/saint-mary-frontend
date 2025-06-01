import imagen from '../img/logo.jpeg'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Intro() {
  return (
    <div>
      <Header />
      <div 
        className="container text-center " 
        style={{ 
          backgroundColor: '#fff', 
          borderRadius: '30px', 
          maxWidth: '100%',
        }}
      >
        <h1 className="display-4 mb-3" style={{ color: '#00247D', fontWeight: '700' }}>
          Welcome to Saint Mary
        </h1>
        <h2 className="mb-4" style={{ color: '#0052cc', fontWeight: '600' }}>
          School of English Language
        </h2>
        <p className="lead mb-4" style={{ fontSize: '1.25rem', color: '#444' }}>
          ¡Aprende inglés con nosotros!
        </p>

        <img 
          src={imagen} 
          alt="English Institute" 
          className="img-fluid rounded shadow-sm mb-4" 
          style={{ objectFit: 'cover' }}
        />

        <div className="d-flex justify-content-center gap-3 p-5 " >
          <Link 
            to="/login" 
            className="btn btn-primary btn-lg"
            style={{ minWidth: '130px' }}
          >
            Log In
          </Link>
          <Link 
            to="/register" 
            className="btn btn-outline-primary btn-lg"
            style={{ minWidth: '130px' }}
          >
            Register
          </Link>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Intro
