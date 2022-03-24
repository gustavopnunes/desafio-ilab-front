import './style.css';

function OrderItem(props) {
    return (
        <div className='orderItem__container' onClick={console.log("oi")}>
            <span className='orderItem__title'>Pedido {props.children}</span>
        </div>
    );
}

export default OrderItem;