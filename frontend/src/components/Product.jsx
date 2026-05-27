import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; //pravi link koji menja rutu bez reloada
import Rating from './Rating';

const Product = ({ product }) => { //prima prozvod sa svim osobinama iz mocka
  return ( //kada se klike na pr da link vodi ka stranici tog pr(taj id)
    <Card className="product-card h-100">
      <Link to={`/product/${product._id}`}> 
        <div className="product-card__img-wrapper">
          <Card.Img
            src={product.image}
            variant="top"
            alt={product.name}
            className="product-card__img"
          />
        </div>
      </Link>

      <Card.Body className="d-flex flex-column">
        <Link to={`/product/${product._id}`} className="product-card__name-link">
          <Card.Title as="h6" className="product-card__name">
            {product.name}
          </Card.Title>
        </Link>

        <div className="mt-1 mb-2">
          <Rating
            value={product.rating}
            text={`(${product.numReviews})`}
          />
        </div>

        <div className="product-card__category mb-2">
          <span className="badge-category">{product.category}</span>
        </div>

        <div className="mt-auto">
          <span className="product-card__price">{product.price} RSD</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;