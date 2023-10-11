import { Link } from "react-router-dom"
import SearchOrder from "./SearchOrder"

const Header = () => {
    return (
        <div className="bg-yellow-500">
            <Link to='/'>Pizza Hut 🛖</Link>
            <SearchOrder />

        </div>
    )
}
export default Header