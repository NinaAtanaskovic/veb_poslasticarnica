import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { FaBirthdayCake } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header>
      <Navbar expand="lg" collapseOnSelect className="main-navbar">
        <Container>
          {/* Logo */}
          <LinkContainer to="/">
            <Navbar.Brand className="navbar-brand-custom">
              <FaBirthdayCake className="brand-icon" />
              <span className="brand-name">Sweet Shop</span>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="main-nav" className="navbar-toggler-custom" />

          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto align-items-center gap-1">

              {/* O nama */}
              <LinkContainer to="/about">
                <Nav.Link className="nav-link-custom">O nama</Nav.Link>
              </LinkContainer>

              {/* Korpa */}
              <LinkContainer to="/cart">
                <Nav.Link className="nav-link-custom nav-cart">
                  <FaShoppingCart />
                  <span className="ms-1">Korpa</span>
                  {totalQty > 0 && (
                    <Badge className="cart-badge ms-1">{totalQty}</Badge>
                  )}
                </Nav.Link>
              </LinkContainer>

              {/* Login / User dropdown */}
              {userInfo ? (
                <NavDropdown
                  title={
                    <span className="nav-link-custom">
                      <FaUser className="me-1" />
                      {userInfo.name}
                    </span>
                  }
                  id="user-dropdown"
                  align="end"
                  className="nav-dropdown-custom"
                >
                  <NavDropdown.Item onClick={logoutHandler}>
                    Odjavi se
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link className="nav-link-custom nav-login">
                    <FaUser className="me-1" />
                    Prijava
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;