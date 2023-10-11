import { Outlet, useNavigation } from "react-router-dom"
import Home from "./Home"
import Header from "./Header"
import CartOverview from "./CartOverview"
import Loading from "../Common/Loading"

const AppLayout = () => {
    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading'

    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            {isLoading ? <Loading /> : ''}
            <Header />
            <div className="overflow-scroll">
                <main className="max-w-3xl mx-auto">
                    <Outlet />
                </main>
            </div>
            <CartOverview />
        </div>
    )
}
export default AppLayout