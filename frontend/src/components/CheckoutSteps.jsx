import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  const steps = [
    { label: 'Prijava', path: '/login', active: step1 },
    { label: 'Dostava', path: '/shipping', active: step2 },
    { label: 'Plaćanje', path: '/payment', active: step3 },
    { label: 'Porudžbina', path: '/placeorder', active: step4 },
  ];

  return (
    <div className="checkout-steps-wrapper">
      {steps.map((step, i) => (
        <div key={i} className={`checkout-step ${step.active ? 'active' : 'disabled'}`}>
          <div className="step-circle">{i + 1}</div>
          <span className="step-label">{step.label}</span>
          {i < steps.length - 1 && <div className="step-line" />}
        </div>
      ))}
    </div>
  );
};

export default CheckoutSteps;