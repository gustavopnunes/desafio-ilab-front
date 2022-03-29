import { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useRequests from "../../hooks/useRequests";
import useTracking from "../../hooks/useTracking";
import OrderItem from "../OrderItem";
import "./style.css";

function OrdersList() {
  const requests = useRequests();
  const { setOrderID } = useTracking();

  const [orders, setOrders] = useState([]);
  const [itensPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(orders.length / itensPerPage);
  const starIndex = currentPage * itensPerPage;
  const endIndex = starIndex + itensPerPage;
  const currentOrders = orders.slice(starIndex, endIndex);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      const ordersList = await requests.get("orders", "OPENED", "100");
      setOrders(ordersList.sort((a, b) => a.id - b.id));
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
    <div className="ordersList__container">
      <ul>
        {currentOrders.map((order) => (
          <li className="ordersList__li" key={order.id} onClick={() => {
            navigate('/start-tracking', { state: { id: order.id } });
            setOrderID(order.id);
          }}>
            <OrderItem
              clientName={order.clientId.clientName}
              address={order.clientId.clientAddress}
            >
              {order.id}
            </OrderItem>
          </li>
        ))}

      </ul>
      <div className="pagination_buttons">
        <button onClick={goBack} className="page-btn">
          <BsArrowLeftCircle className={currentPage === 0 ? "arrow-icon-inactive" : "arrow-icon-active"} />
        </button>
        <span className="page-span">
          {currentPage + 1} / {pages}
        </span>
        <button onClick={passPage} className="page-btn">
          <BsArrowRightCircle className={currentPage === pages - 1 ? "arrow-icon-inactive" : "arrow-icon-active"} />
        </button>
      </div>
    </div>
  );
}

export default OrdersList;
