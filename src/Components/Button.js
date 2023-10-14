import { Link } from "react-router-dom"

const Button = ({ children, disabled, to, type, onClick }) => {

    const base = "bg-yellow-400 uppercase font-semibold text-stone-800  rounded-full hover:bg-yellow-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"

    const styles = {
        primary: base + ' px-4 py-3 md:px-6 md:py-4',
        count: ' font-bold text-stone-800  rounded-full  transition-colors focus:outline-none disabled:cursor-not-allowed px-2 py-0.75 md:px-5 md:py-1',
        small: base + '  py-2 md:px-5 md:py-2.5 text-sm',
        secondary: "border uppercase font-semibold text-stone-800  rounded-full hover:bg-stone-300 transition-colors focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
    }
    if (to)
        return (<Link to={to} className={styles[type]}>{children}</Link>)
    if (onClick)
        return (<button disabled={disabled} className={styles[type]} onClick={onClick}>{children}
        </button>
        )
    return (
        <button disabled={disabled} className={styles[type]}>{children}
        </button>
    )
}
export default Button