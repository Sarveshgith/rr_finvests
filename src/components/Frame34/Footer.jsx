import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css';
import FooterEmailForm from './FooterEmail';
export default function App() {
  return (
    <div >
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'style={{height:'50vh',fontFamily:'Noto'}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        </div>

        <div>
          <a href='' className='me-4 text-reset'> 
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className='mdb-footer'>
      <MDBContainer className='text-center text-md-start mt-5' style={{ height: '200px' }}>
      <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                RR FINVEST
              </h6>
              <p>
              <FooterEmailForm />
              </p>
            </MDBCol>

            

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/about' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='/news' className='text-reset'>
                  News
                </a>
              </p>
              <p>
                <a href='/Whatwedo' className='text-reset'>
                  What we Do
                </a>
              </p>
              <p>
                <a href='/tools' className='text-reset'>
                  Tools
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                          Phase - I, Ground Floor, Spencer Plaza Mall, G-24, Anna Salai, Chennai, Tamil Nadu 600002
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                rrfinvest@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='mdbff text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
       2025

      </div>
    </MDBFooter>
    </div>
  );
}