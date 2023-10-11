import { useState } from "react"
import { Form, useNavigate } from "react-router-dom"

const SearchOrder = () => {
    const [query, setQuery] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query === '') return
        navigate(`/order/${query}`)
        setQuery('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className="rounded-full text-sm bg-yellow-100 placeholder:text-stone-400 px-4 py-2 w-28 transition-all duration-300 sm:focus:w-72 focus:outline-none focus:ring focus:ring-yellow-500 sm:w-64" type="text" placeholder="Enter your OrderID" value={query}
                onChange={(e) => setQuery(e.target.value)} />
            {/* <button>Search</button> */}
        </form>
    )
}
export default SearchOrder