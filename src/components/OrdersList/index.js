import './style.css';
import OrderItem from '../OrderItem';
import Header from '../Header';
import { useEffect, useState } from 'react';
import useRequests from '../../hooks/useRequests';
import iconNext from './assets/icon-next.png';

function OrdersList() {
  const [orders, setOrders] = useState([]);
  const requests = useRequests();
  const [numberItens, setNumberItens] = useState(6);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const ordersList = await requests.get('orders', 'aberto', numberItens);
      setOrders(ordersList);
    };
    fetchData();

    //eslint-disable-next-line
  }, []);

  const passPage = async () => {
    setNumberItens(numberItens + 6);
    let ordersList = await requests.get('orders', 'aberto', numberItens + 6);
    setOrders(ordersList.slice(numberItens, numberItens + numberItens));
    setPage(page + 1);
  };
  return (
    <div className='ordersList__container'>
      <Header>Pedidos abertos</Header>
      <ul>
        {orders.map((order) => (
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
        <button onClick={passPage} className='btn_next'>
          <img src={iconNext} alt='' />
        </button>
      </div>
    </div>
  );
}

export default OrdersList;
