import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Badge } from 'react-bootstrap';
import { FaTimes, FaEye } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useGetOrdersQuery } from '../../slices/ordersApiSlice';

const OrderListScreen = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();

  return (
    <div className='admin-screen'>
      <h1 className='admin-title'>
        <span className='admin-title-icon'>🧾</span> Porudžbine
      </h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className='admin-table-wrapper'>
          <Table striped hover responsive className='admin-table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>KORISNIK</th>
                <th>DATUM</th>
                <th>UKUPNO</th>
                <th>PLAĆANJE</th>
                <th>DOSTAVA</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className='text-muted small'>{order._id}</td>
                  <td>{order.user && order.user.name}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td><strong>{order.totalPrice} RSD</strong></td>
                  <td>
                    {order.isPaid ? (
                      <Badge bg='success'>{order.paidAt.substring(0, 10)}</Badge>
                    ) : (
                      <FaTimes style={{ color: 'var(--color-danger, #dc3545)' }} />
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      <Badge bg='success'>{order.deliveredAt.substring(0, 10)}</Badge>
                    ) : (
                      <FaTimes style={{ color: 'var(--color-danger, #dc3545)' }} />
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button variant='outline-primary' size='sm' className='admin-btn-detail'>
                        <FaEye /> Detalji
                      </Button>
                    </LinkContainer>
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

export default OrderListScreen;
