import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { savePaymentMethod } from '../slices/cartSlice';
import CheckoutSteps from '../components/CheckoutSteps';
import FormContainer from '../components/FormContainer';

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('Plaćanje pouzećem');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { shippingAddress } = useSelector((state) => state.cart);

  useEffect(() => {
    if (!shippingAddress?.address) navigate('/shipping');
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder');
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1 className="form-title">Način plaćanja</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-4">
          <Form.Label className="mb-3 fw-semibold">Odaberite način plaćanja</Form.Label>

          {['Plaćanje pouzećem', 'Kartica', 'PayPal'].map((method) => (
            <Form.Check
              key={method}
              type="radio"
              className="payment-option mb-2"
              label={method}
              id={method}
              name="paymentMethod"
              value={method}
              checked={paymentMethod === method}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          ))}
        </Form.Group>

        <Button type="submit" className="btn-form w-100">
          Nastavi
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;