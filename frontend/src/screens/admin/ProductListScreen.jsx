import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col, Badge } from 'react-bootstrap';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { toast } from 'react-toastify';
import {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} from '../../slices/productsApiSlice';

const ProductListScreen = () => {
  const { data: products, isLoading, error, refetch } = useGetProductsQuery();
  const [createProduct, { isLoading: loadingCreate }] = useCreateProductMutation();
  const [deleteProduct, { isLoading: loadingDelete }] = useDeleteProductMutation();

  const deleteHandler = async (id) => {
    if (window.confirm('Da li ste sigurni da želite da obrišete ovu poslasticu?')) {
      try {
        await deleteProduct(id).unwrap();
        toast.success('Poslastica uspešno obrisana');
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const createProductHandler = async () => {
    if (window.confirm('Kreirati novu poslasticu sa podrazumevanim vrednostima?')) {
      try {
        await createProduct().unwrap();
        refetch();
        toast.success('Nova poslastica kreirana — uredite je odmah!');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className='admin-screen'>
      <Row className='align-items-center mb-3'>
        <Col>
          <h1 className='admin-title'>
            <span className='admin-title-icon'>🍰</span> Poslastice
          </h1>
        </Col>
        <Col className='text-end'>
          <Button className='admin-btn-create' onClick={createProductHandler}>
            <FaPlus /> Nova Poslastica
          </Button>
        </Col>
      </Row>

      {loadingCreate && <Loader />}
      {loadingDelete && <Loader />}

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <div className='admin-table-wrapper'>
          <Table striped hover responsive className='admin-table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAZIV</th>
                <th>CENA</th>
                <th>KATEGORIJA</th>
                <th>STANJE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td className='text-muted small'>{product._id}</td>
                  <td><strong>{product.name}</strong></td>
                  <td>{product.price} RSD</td>
                  <td>
                    <Badge className='admin-category-badge'>{product.category}</Badge>
                  </td>
                  <td>
                    {product.countInStock > 0 ? (
                      <Badge bg='success'>{product.countInStock} kom</Badge>
                    ) : (
                      <Badge bg='danger'>Nema na stanju</Badge>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant='outline-primary' size='sm' className='me-2 admin-btn-edit'>
                        <FaEdit />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='outline-danger'
                      size='sm'
                      className='admin-btn-delete'
                      onClick={() => deleteHandler(product._id)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ProductListScreen;
