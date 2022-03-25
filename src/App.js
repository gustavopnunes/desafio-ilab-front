import { useState } from "react";
import Login from "./pages/Login";
import Orders from "./pages/Orders";

function App() {

  const [isLoggedIn] = useState(true)

  return (

    <div className="App">
    {isLoggedIn? <Orders /> : <Login />}
    </div>
  );
}

export default App;
