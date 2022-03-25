import {
  BrowserRouter,
  Routes as Switch,
  Route,
} from "react-router-dom";
import FinishTracking from "../pages/FinishTracking";
import Login from "../pages/Login";
import Orders from "../pages/Orders";
import StartTracking from "../pages/StartTracking";
import { useAuth } from "../providers/AuthContext";

const Routes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      {!isAuthenticated ? (
        <Switch>
          <Route path="*" element={<Login />} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/orders" element={<Orders />} />
          <Route path="/start-tracking" element={<StartTracking />} />
          <Route path="/finish-tracking" element={<FinishTracking />} />
          <Route path="*" element={<Login />} />

        </Switch>
      )}
    </BrowserRouter>
  );
};

export default Routes;
