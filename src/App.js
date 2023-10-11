import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./Components/AppLayout"
import Cart from "./Components/Cart"
import Menu, { loader as menuLoader } from "./Components/Menu"
import Order, { loader as orderLoader } from "./Components/Order"
import Home from "./Components/Home"
import CreateOrder, { action as createOrderAction } from "./Components/CreateOrder"
import Error from "./Common/Error"

const route = createBrowserRouter([
  {

    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'cart',
        element: <Cart />
      }, {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      }, {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,

      }, {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction
      }
    ]
  },
])
const App = () => {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  )
}
export default App