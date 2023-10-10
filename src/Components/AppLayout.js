import { Outlet } from "react-router-dom"
import Home from "./Home"
import Header from "./Header"
import CartOverview from "./CartOverview"

const AppLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <CartOverview />
        </div>
    )
}
export default AppLayout