import { useSelector } from "react-redux"

const Username = () => {
    const userName = useSelector(store => store.user.userName)
    if (!userName) return null
    return (
        <div className="font-bold capitalize hidden md:block">
            {userName}
        </div>
    )
}
export default Username