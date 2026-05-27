import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children }) => { //sadrzaj izmedju tagova je children
  return (
    <Container className="form-container-section">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <div className="form-card">
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;