import { Container, Row, Col } from 'react-bootstrap';
import { FaBirthdayCake } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <Container>
        <Row className="align-items-center py-3">
          <Col md={4} className="footer-brand mb-2 mb-md-0">
            <FaBirthdayCake className="me-2 footer-icon" />
            <span className="footer-name">Sweet Shop</span>
          </Col>

          <Col md={4} className="text-center mb-2 mb-md-0">
            <small className="footer-copy">
              © {year} Sweet Shop. Sva prava zadržana.
            </small>
          </Col>

          <Col md={4} className="text-md-end">
            <small className="footer-tagline">
              Pravimo s ljubavlju 🍰
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;