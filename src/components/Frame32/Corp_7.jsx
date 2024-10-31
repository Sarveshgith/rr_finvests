import React from 'react'
import './Corp_7.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const Corp_7 = () => {
  return (
    <div>
      <Container>
      <Row>
        <Col sm="12" md="4" lg="4"><div className='motar-ins1-content1'><img src="generalinsurance.png"/></div></Col>
        <Col sm="12" md="7" lg="8">
        <h1 className='text-center motar-ins1-content3'>GENERAL MEDICAL COVERAGE</h1>
        <p className='motar-ins1-content2'>Group health insurance policies typically cover a specific group of people, usually the employees of an organization. It is often provided as an employment benefit. The covered employees can also choose to enroll their family members, such as spouses, parents, and children, under the same policy. The coverage and cost-effectiveness of these plans depend on the specific plan chosen by the employer. A key benefit of group health insurance is instant coverage of pre-existing conditions, with no waiting periods. These plans also cover a broad spectrum of medical needs, including treatment for common illnesses, maternity benefits, and daycare treatment. Moreover, it also includes wellness benefits, among other valuable features. Unlike individual health insurance policies, which frequently impose non-negotiable waiting periods and may be linked to high premiums, employer-sponsored health insurance is viewed as a crucial and valuable benefit, not just a desirable perk.</p>
        {/*<Button className='btn2'>Explore →</Button>*/}
        </Col>
         </Row>
    </Container>
    </div>
  )
}

export default Corp_7
