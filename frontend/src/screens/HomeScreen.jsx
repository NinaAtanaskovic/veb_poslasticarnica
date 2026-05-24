import { Container, Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productsApiSlice';

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Dobrodošli u Sweet Shop</h1>
          <p className="hero-subtitle">
            Svaki zalogaj priča svoju priču — od klasičnih torti do modernih kreacija.
          </p>
        </div>
      </section>

      <Container className="products-section">
        <h2 className="section-title">Naši proizvodi</h2>
        {isLoading ? (
          <p>Učitavanje...</p>
        ) : error ? (
          <p className="text-danger">Greška pri učitavanju proizvoda.</p>
        ) : (
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {products.map((product) => (
              <Col key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;