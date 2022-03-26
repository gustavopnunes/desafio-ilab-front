import { useState } from "react";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import StartTracking from "./pages/StartTracking";
import FinishTracking from "./pages/FinishTracking";
import Routes from "./routes";
import TrackingProvider from "./contexts/TrackingContext";

function App() {
  return <Routes />

  // estado para usar com auth-context
  // const [isLogged, setIsLogged] = useState(false)

  /* estado feito apenas para visualizar / testar pagina
    - possiveis paginas: login, order, startTracking, finishTracking
  */
  const [whatPage] = useState("login")

  return (
    <TrackingProvider>
      <div className="App">
        {whatPage === "login" ? <Login /> : whatPage === "orders" ? <Orders /> : whatPage === "startTracking" ? <StartTracking /> : <FinishTracking />}
      </div>
    </TrackingProvider>
  );
}

export default App;
