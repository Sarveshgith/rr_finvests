import React from 'react'
import './Corp_5.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Corp_5 = () => {
  return (
    <div>
      <Container>
      <Row>
        <Col sm="12" md="7" lg="9">
        <h1 className='text-center health-ins1-content3'>MARINE INSURANCE</h1>
        <p className='motar-ins1-content2'>Marine insurance is a specialized form of insurance designed to protect against the various risks associated with maritime activities, including the transportation of goods and the operation of vessels. It encompasses several types of coverage, such as hull insurance, which safeguards against physical damage to ships; cargo insurance, which protects goods during transit; and liability insurance, covering legal responsibilities arising from shipping operations. Key principles of marine insurance include indemnity, where the insured is compensated for losses without profit; utmost good faith, requiring full disclosure of relevant information by both parties; and insurable interest, ensuring that the insured has a legitimate stake in the subject matter.</p>
        {/*<Link to='/Marine_ins2'><Button className='btn2'>Get to know</Button></Link>*/}
        </Col>
        <Col sm="12" md="5" lg="3"><div className='health-ins1-content1'><img src="marineinsurance.png"/> </div></Col>
         </Row>
    </Container>
    </div>
  )
}

export default Corp_5
