import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./Components/AppLayout"
import Cart from "./Components/Cart"
import Menu from "./Components/Menu"
import Order from "./Components/Order"
import Home from "./Components/Home"
import CreateOrder from "./Components/CreateOrder"

const route = createBrowserRouter([
  {

    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'cart',
        element: <Cart />
      }, {
        path: '/menu',
        element: <Menu />
      }, {
        path: '/order/:orderId',
        element: <Order />
      }, {
        path: '/order/new',
        element: <CreateOrder />
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