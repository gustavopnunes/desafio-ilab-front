import './style.css';
import OrderItem from '../OrderItem';
import Header from '../Header';
import { useEffect, useState } from 'react';
import useRequests from '../../hooks/useRequests';
import iconNext from './assets/icon-next.png';
import iconPrev from './assets/icon-prev.png';

function OrdersList() {
  const [orders, setOrders] = useState([]);
  const requests = useRequests();
  const [itensPerPage, setItensPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(orders.length / itensPerPage);
  const starIndex = currentPage * itensPerPage;
  const endIndex = starIndex + itensPerPage;
  const currentOrders = orders.slice(starIndex, endIndex);

  useEffect(() => {
    const fetchData = async () => {
      const ordersList = await requests.get('orders', 'aberto', '100');
      setOrders(ordersList);
    };
    fetchData();
    //eslint-disable-next-line
  }, []);

  const goBack = () => {
    if (currentPage === 0) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };
  const passPage = () => {
    if (currentPage === pages - 1) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className='ordersList__container'>
      <Header>Pedidos abertos</Header>
      <ul>
        {currentOrders.map((order) => (
          <li className='ordersList__li' key={order.id}>
            <OrderItem
              clientName={order.clientId.clientName}
              address={order.clientId.clientAddress}>
              {order.id}
            </OrderItem>
          </li>
        ))}
      </ul>

      <div className='pagination_buttons'>
        <button onClick={goBack} className='btn-prev'>
          <img src={iconPrev} alt='' />
        </button>
        <span>
          {currentPage + 1}-{pages}
        </span>
        <button onClick={passPage} className='btn_next'>
          <img src={iconNext} alt='' />
        </button>
      </div>
    </div>
  );
}

export default OrdersList;
