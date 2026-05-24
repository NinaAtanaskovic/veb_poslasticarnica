import { useParams } from 'react-router-dom';

const ProductDetailScreen = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Detalj proizvoda ID: {id} — dolazi u Fazi 2</h1>
    </div>
  );
};

export default ProductDetailScreen;