import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => { //ako je ulogovan na zeljenu str ako nije ostaje
    if (userInfo) navigate(redirect);
  }, [userInfo, redirect, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault(); //sprecava refresh stranice
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || 'Greška pri prijavi');
    }
  };

  return (
    <FormContainer>
      <h1 className="form-title">Prijavite se</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email adresa</Form.Label>
          <Form.Control
            type="email"
            placeholder="Unesite email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Lozinka</Form.Label>
          <Form.Control
            type="password"
            placeholder="Unesite lozinku"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </Form.Group>

        <Button type="submit" className="btn-form w-100 mt-2" disabled={isLoading}>
          {isLoading ? 'Učitavanje...' : 'Prijavi se'}
        </Button>
        {isLoading && <Loader />}
      </Form>

      <Row className="mt-3">
        <Col className="text-center">
          Nemate nalog?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'} className="form-link">
            Registrujte se
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;