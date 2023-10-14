import { useSelector } from "react-redux";
import CreateUser from "./CreateUser";
import Button from "./Button";

function Home() {
  const userName = useSelector(str => str.user.userName)
  return (
    <div className="text-center mt-10">
      <h1 className="text-xl text-center font-semibold text-stone-700 mb-8">
        The best pizza.
        <br />
        <span className="text-yellow-500">Straight out of the oven, straight to you.</span>

      </h1>
      {userName === '' ? <CreateUser /> : <Button type='primary' to='/menu'>Check Out</Button>}
    </div>
  );
}

export default Home;
