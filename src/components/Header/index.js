import './styles.css';

function Header(props) {
    return (
        <div className='orderList__top'>
            <h1 className='orderList__h1'>
                {props.children}
            </h1>
        </div>
    );
}

export default Header;
