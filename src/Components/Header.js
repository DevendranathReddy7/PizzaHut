import { Link } from "react-router-dom"
import SearchOrder from "./SearchOrder"
import Username from "./Username"

const Header = () => {
    return (
        <div className="bg-yellow-300 uppercase tracking-widest px-3 py-4 border-b border-stone-500 flex  justify-between">
            <Link to='/'>Pizza Hut 🛖</Link>
            <div className="flex justify-between items-center">
                <SearchOrder />
                <Username />
            </div>

        </div>
    )
}
export default Header