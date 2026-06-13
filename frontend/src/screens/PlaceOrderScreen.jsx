import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Card, Button, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import CheckoutSteps from '../components/CheckoutSteps';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useCreateOrderMutation } from '../slices/ordersApiSlice';
import { clearCartItems } from '../slices/cartSlice';

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  useEffect(() => {
    if (!cart.shippingAddress?.address) navigate('/shipping');
    else if (!cart.paymentMethod) navigate('/payment');
  }, [cart, navigate]);

  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap();
      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
    } catch (err) {
      toast.error(err?.data?.message || 'Greška pri narudžbini');
    }
  };

  return (
    <Container className="placeorder-section">
      <CheckoutSteps step1 step2 step3 step4 />
      <h1 className="section-title mb-4">Pregled porudžbine</h1>

      <Row className="g-4">
        <Col md={8}>
          <ListGroup variant="flush" className="placeorder-list">

            {/* Dostava */}
            <ListGroup.Item className="placeorder-item">
              <h5 className="placeorder-item-title">📦 Dostava</h5>
              <p className="mb-0">
                {cart.shippingAddress.address}, {cart.shippingAddress.city},{' '}
                {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            {/* Placanje */}
            <ListGroup.Item className="placeorder-item">
              <h5 className="placeorder-item-title">💳 Plaćanje</h5>
              <p className="mb-0">{cart.paymentMethod}</p>
            </ListGroup.Item>

            {/* Stavke */}
            <ListGroup.Item className="placeorder-item">
              <h5 className="placeorder-item-title">🍰 Stavke porudžbine</h5>
              {cart.cartItems.length === 0 ? (
                <Message>Korpa je prazna</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, i) => (
                    <ListGroup.Item key={i} className="placeorder-product-row">
                      <Row className="align-items-center">
                        <Col xs={2}>
                          <Image src={item.image} alt={item.name} fluid rounded />
                        </Col>
                        <Col>
                          <Link to={`/product/${item._id}`} className="placeorder-product-name">
                            {item.name}
                          </Link>
                        </Col>
                        <Col xs={4} className="text-end">
                          {item.qty} × {item.price} = <strong>{item.qty * item.price} RSD</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Summary */}
        <Col md={4}>
          <Card className="cart-summary-card">
            <Card.Body>
              <h2 className="cart-summary-title">Rezime</h2>

              <div className="cart-summary-row">
                <span>Proizvodi</span>
                <span>{cart.itemsPrice} RSD</span>
              </div>
              <div className="cart-summary-row">
                <span>Dostava</span>
                <span>{cart.shippingPrice === 0 ? 'Besplatno' : `${cart.shippingPrice} RSD`}</span>
              </div>
              <div className="cart-summary-row cart-summary-total">
                <span>Ukupno</span>
                <span>{cart.totalPrice} RSD</span>
              </div>

              {error && <Message variant="danger">{error?.data?.message}</Message>}

              <Button
                className="btn-checkout w-100 mt-3"
                disabled={cart.cartItems.length === 0 || isLoading}
                onClick={placeOrderHandler}
              >
                {isLoading ? 'Obrađuje se...' : 'Poruči sada'}
              </Button>
              {isLoading && <Loader />}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaceOrderScreen;