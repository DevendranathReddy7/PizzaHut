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
            <input type="text" placeholder="Enter your OrderID" value={query}
                onChange={(e) => setQuery(e.target.value)} />
            <button>Search</button>
        </form>
    )
}
export default SearchOrder