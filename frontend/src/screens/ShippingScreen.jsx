import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../slices/cartSlice';
import CheckoutSteps from '../components/CheckoutSteps';
import FormContainer from '../components/FormContainer';

const ShippingScreen = () => {
  const { shippingAddress } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingAddress?.address || '');
  const [city, setCity] = useState(shippingAddress?.city || '');
  const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode || '');
  const [country, setCountry] = useState(shippingAddress?.country || 'Srbija');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault(); //da ne moze da ide obican submit
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate('/payment');
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1 className="form-title">Podaci o dostavi</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address" className="mb-3">
          <Form.Label>Adresa</Form.Label>
          <Form.Control
            type="text"
            placeholder="Unesite adresu"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="city" className="mb-3">
          <Form.Label>Grad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Unesite grad"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="postalCode" className="mb-3">
          <Form.Label>Poštanski broj</Form.Label>
          <Form.Control
            type="text"
            placeholder="Unesite poštanski broj"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="country" className="mb-3">
          <Form.Label>Država</Form.Label>
          <Form.Control
            type="text"
            placeholder="Unesite državu"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
            className="form-input"
          />
        </Form.Group>

        <Button type="submit" className="btn-form w-100 mt-2">
          Nastavi
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;