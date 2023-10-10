import { Outlet, useNavigation } from "react-router-dom"
import Home from "./Home"
import Header from "./Header"
import CartOverview from "./CartOverview"
import Loading from "../Common/Loading"

const AppLayout = () => {
    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading'

    return (
        <div className="layout">
            {isLoading ? <Loading /> : ''}
            <Header />
            <main>
                <Outlet />
            </main>
            <CartOverview />
        </div>
    )
}
export default AppLayout