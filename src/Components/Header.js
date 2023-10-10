import { Link } from "react-router-dom"
import SearchOrder from "./SearchOrder"

const Header = () => {
    return (
        <div>
            <Link to='/'>Pizza Hut 🛖</Link>
            <SearchOrder />
        </div>
    )
}
export default Header