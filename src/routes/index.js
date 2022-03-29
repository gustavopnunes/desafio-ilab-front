import { Routes as Switch, Route, Navigate } from "react-router-dom";
import FinishTracking from "../pages/FinishTracking";
import Login from "../pages/Login";
import Orders from "../pages/Orders";
import StartTracking from "../pages/StartTracking";
import { useAuth } from "../contexts/AuthContext";

const Routes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {!isAuthenticated ? (
        <Switch>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/orders" element={<Orders />} />
          <Route path="/start-tracking" element={<StartTracking />} />
          <Route path="/finish-tracking" element={<FinishTracking />} />
          <Route path="*" element={<Navigate to="/orders" replace />} />
        </Switch>
      )}
    </>
  );
};

export default Routes;
