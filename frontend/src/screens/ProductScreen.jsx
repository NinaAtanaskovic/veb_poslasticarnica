import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap';
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Rating from '../components/Rating';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import { addToCart } from '../slices/cartSlice';

const ProductScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const { data: product, isLoading, error } = useGetProductDetailsQuery(id);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    toast.success(`${product.name} dodato u korpu!`);
    navigate('/cart');
  };

  if (isLoading) return <Container className="py-5 text-center"><p>Učitavanje...</p></Container>;
  if (error || !product) return (
    <Container className="py-5">
      <p className="text-danger">Proizvod nije pronađen.</p>
      <Link to="/">← Nazad na početnu</Link>
    </Container>
  );

  return (
    <Container className="product-detail-section">
      <Link to="/" className="btn-back">
        <FaArrowLeft className="me-2" />
        Nazad
      </Link>

      <Row className="product-detail-grid">
        {/* Slika */}
        <Col md={6} className="mb-4 mb-md-0">
          <div className="product-detail-img-wrapper">
            <Image src={product.image} alt={product.name} className="product-detail-img" />
          </div>
        </Col>

        {/* Info */}
        <Col md={6}>
          <div className="product-detail-info">
            <span className="badge-category mb-3 d-inline-block">{product.category}</span>
            <h1 className="product-detail-name">{product.name}</h1>

            <div className="mb-3">
              <Rating value={product.rating} text={`${product.numReviews} recenzija`} />
            </div>

            <p className="product-detail-desc">{product.description}</p>

            <ListGroup variant="flush" className="product-detail-listgroup">
              <ListGroup.Item className="product-detail-list-item">
                <span className="list-label">Cena </span>
                <span className="product-detail-price">{product.price} RSD</span>
              </ListGroup.Item>

              <ListGroup.Item className="product-detail-list-item">
                <span className="list-label">Status </span>
                <span className={product.countInStock > 0 ? 'status-available' : 'status-unavailable'}>
                  {product.countInStock > 0 ? 'Dostupno' : 'Nije dostupno'}
                </span>
              </ListGroup.Item>

              {product.countInStock > 0 && (
                <ListGroup.Item className="product-detail-list-item">
                  <span className="list-label">Količina </span>
                  <Form.Select
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                    className="qty-select"
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Select>
                </ListGroup.Item>
              )}
            </ListGroup>

            <Button
              className="btn-add-to-cart mt-3"
              onClick={addToCartHandler}
              disabled={product.countInStock === 0}
            >
              <FaShoppingCart className="me-2" />
              Dodaj u korpu
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductScreen;