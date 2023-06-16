import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from "./Components/Dashboard/Dashboard";
import Invoice from "./Components/Dashboard/Invoice";
import Product_Services from "./Components/Dashboard/Product_Services";
import Profile from "./Components/Dashboard/Profile";
import Customer from "./Components/Dashboard/Customer";
import PaymentLink from "./Components/Dashboard/PaymentLink";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/invoice",
    element: <Invoice />,
  },
  {
    path: "/customer",
    element: <Customer />,
  },
  {
    path: "/productservices",
    element: <Product_Services />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/paymentlink",
    element: <PaymentLink />,
  }

]);



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
