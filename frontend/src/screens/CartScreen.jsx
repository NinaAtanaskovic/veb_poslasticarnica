import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { FaTrash, FaArrowRight, FaShoppingCart } from 'react-icons/fa';
import { addToCart, removeFromCart } from '../slices/cartSlice';

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

  const addToCartHandler = (product, qty) => dispatch(addToCart({ ...product, qty }));
  const removeFromCartHandler = (id) => dispatch(removeFromCart(id));
  const checkoutHandler = () => navigate('/login?redirect=/shipping');

  return (
    <Container className="cart-section">
      <h1 className="section-title">
        <FaShoppingCart className="me-2" />
        Vaša korpa
      </h1>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Korpa je prazna.</p>
          <Link to="/" className="btn-back">← Vrati se na proizvode</Link>
        </div>
      ) : (
        <Row className="g-4">
          {/* Lista stavki */}
          <Col md={8}>
            <ListGroup variant="flush" className="cart-list">
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id} className="cart-item">
                  <Row className="align-items-center">
                    {/* Slika */}
                    <Col xs={3} md={2}>
                      <div className="cart-item-img-wrapper">
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </div>
                    </Col>

                    {/* Naziv */}
                    <Col xs={9} md={4}>
                      <Link to={`/product/${item._id}`} className="cart-item-name">
                        {item.name}
                      </Link>
                      <div className="cart-item-category">{item.category}</div>
                    </Col>

                    {/* Cena */}
                    <Col md={2} className="cart-item-price d-none d-md-block">
                      {item.price} RSD
                    </Col>

                    {/* Kolicina */}
                    <Col xs={6} md={2}>
                      <Form.Select
                        value={item.qty}
                        onChange={(e) => addToCartHandler(item, Number(e.target.value))}
                        className="qty-select"
                        size="sm"
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>{x + 1}</option>
                        ))}
                      </Form.Select>
                    </Col>

                    {/* Brisanje */}
                    <Col xs={6} md={2} className="text-end">
                      <Button
                        className="cart-remove-btn"
                        onClick={() => removeFromCartHandler(item._id)}
                      >
                        <FaTrash />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Summary kartica */}
          <Col md={4}>
            <Card className="cart-summary-card">
              <Card.Body>
                <h2 className="cart-summary-title">Pregled porudžbine</h2>

                <div className="cart-summary-row">
                  <span>Proizvodi ({totalQty}) </span>
                  <span>{totalPrice.toFixed(0)} RSD</span>
                </div>

                <div className="cart-summary-row">
                  <span>Dostava </span>
                  <span>{totalPrice > 2000 ? 'Besplatno' : '300 RSD'}</span>
                </div>

                <div className="cart-summary-row cart-summary-total">
                  <span>Ukupno </span>
                  <span>{(totalPrice + (totalPrice > 2000 ? 0 : 300)).toFixed(0)} RSD</span>
                </div>

                {totalPrice <= 2000 && (
                  <p className="cart-shipping-note">
                    Dodaj još {(2000 - totalPrice).toFixed(0)} RSD za besplatnu dostavu!
                  </p>
                )}

                <Button
                  className="btn-checkout mt-3 w-100"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Nastavi <FaArrowRight className="ms-2" />
                </Button>

                <Link to="/" className="cart-continue-link mt-3 d-block text-center">
                  ← Nastavi kupovinu
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CartScreen;