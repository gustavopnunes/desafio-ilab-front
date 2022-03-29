import motoIcon from './assets/moto-icon.png';
import './style.css';

function OrderItem({ clientName, children, address }) {
  return (
    <div className='orderItem_container'>
      <div className='container-info'>
        <p className='client_name'>Cliente: {clientName}</p>
        <p className='client_address'>{address}</p>
      </div>
      <span className='pedido_id'>#{children}</span>
      <img className='moto_icon' src={motoIcon} alt='' />
    </div>
  );
}

export default OrderItem;
