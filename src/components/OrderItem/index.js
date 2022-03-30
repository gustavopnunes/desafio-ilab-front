import motoIcon from './assets/moto-icon.png';
import './style.css';

function OrderItem({ clientName, children }) {
  return (
    <div className='orderItem_container'>
      <div className='container-info'>
        <p className='client_name'>Cliente: {clientName}</p>
        <p className='client_order'>Pedido #{children}</p>
      </div>
      <img className='moto_icon' src={motoIcon} alt='' />
    </div>
  );
}

export default OrderItem;
