import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css';
import FooterEmailForm from './FooterEmail';
import {Link}from 'react-router-dom';

export default function App() {
  return (
    <div className="mdb-footer">
      <div className="footer-content">
        
        <MDBCol className="footer-column">
          <h6 className="text-uppercase fw-bold">
            <MDBIcon icon="gem" className="mdb-icon" />
            RR FINVESTS
          </h6>
          <p className="text-muted">Subscribe to get Latest News</p>
          <p className="text-muted">and Insights from us!</p>
          <FooterEmailForm />
        </MDBCol>

        
        <MDBCol className="footer-column">
          <h6 className="text-uppercase fw-bold">Useful links</h6>
          <p><Link to='/about' className='text-reset'>About</Link></p>
          <p><Link to='/news' className='text-reset'>News</Link></p>
          <p><Link to='/Whatwedo' className='text-reset'>What we Do</Link></p>
          <p><Link to='/tools' className='text-reset'>Tools</Link></p>
        </MDBCol>

        
        <MDBCol className="footer-column">
          <h6 className="text-uppercase fw-bold">Contact</h6>
          <p>Phase - I, Ground Floor, Spencer Plaza Mall, G-24, Anna Salai, Chennai, Tamil Nadu 600002</p>
          <p>
  <a href="mailto:business@rrfinvests.com" style={{ textDecoration: 'none', color: 'inherit' }}>
    business@rrfinvests.com
  </a>
  </p>
  <p>
  <a href="tel:+919543873330" style={{ textDecoration: 'none', color: 'inherit' }}>
     +91 9543873330
  </a>
</p>        
</MDBCol>
      </div>

      {/* Footer Credit */}
      <div className="footer-credit">RR Finvests@2024</div>
    </div>
  );
}
