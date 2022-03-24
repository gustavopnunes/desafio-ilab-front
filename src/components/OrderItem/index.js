import './style.css';

function OrderItem(props) {
    return (
        <div className='orderItem__container' onClick={console.log("oi")}>
            <h1 className='orderItem__h1'>Pedido {props.children}</h1>
        </div>
    );
}

export default OrderItem;