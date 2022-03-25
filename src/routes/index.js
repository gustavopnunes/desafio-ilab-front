import { BrowserRouter, Routes as Switch, Route } from "react-router-dom"
import Login from "../pages/Login"
import Orders from "../pages/Orders"

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" element={<Login />} />
            <Route path="/orders" element={<Orders />} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes