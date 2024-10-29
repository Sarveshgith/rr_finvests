import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css';
import FooterEmailForm from './FooterEmail';

export default function App() {
  return (
    <div className="mdb-footer">
      <div className="footer-content">
        
        <MDBCol className="footer-column">
          <h6 className="text-uppercase fw-bold">
            <MDBIcon icon="gem" className="mdb-icon" />
            RR FINVEST
          </h6>
          <FooterEmailForm />
        </MDBCol>

        
        <MDBCol className="footer-column">
          <h6 className="text-uppercase fw-bold">Useful links</h6>
          <p><a href='/about' className='text-reset'>About</a></p>
          <p><a href='/news' className='text-reset'>News</a></p>
          <p><a href='/Whatwedo' className='text-reset'>What we Do</a></p>
          <p><a href='/tools' className='text-reset'>Tools</a></p>
        </MDBCol>

        
        <MDBCol className="footer-column">
          <h6 className="text-uppercase fw-bold">Contact</h6>
          <p><MDBIcon icon="home" className="mdb-icon" />Phase - I, Ground Floor, Spencer Plaza Mall, G-24, Anna Salai, Chennai, Tamil Nadu 600002</p>
          <p><MDBIcon icon="envelope" className="mdb-icon" /> rrfinvest@gmail.com</p>
          <p><MDBIcon icon="phone" className="mdb-icon" /> + 01 234 567 88</p>
        </MDBCol>
      </div>

      {/* Footer Credit */}
      <div className="footer-credit">@2025</div>
    </div>
  );
}
