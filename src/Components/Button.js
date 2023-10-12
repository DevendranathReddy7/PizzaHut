import { Link } from "react-router-dom"

const Button = ({ children, disabled, to }) => {
    const className = "bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 rounded-full hover:bg-yellow-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
    if (to)
        return (<Link to={to} className={className}>{children}</Link>)
    return (
        <button disabled={disabled} className={className}>{children}
        </button>
    )
}
export default Button