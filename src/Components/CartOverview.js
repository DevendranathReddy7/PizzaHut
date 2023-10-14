import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { totalPrice, totalQuantity } from "../Sevices/cartSlice";

function CartOverview() {
  const totalItems = useSelector(totalQuantity)
  const totalPric = useSelector(totalPrice)

  return (
    <div className="bg-stone-800 uppercase text-stone-200 px-4 py-4 sm:px-6 flex  justify-between">
      {totalItems > 0 ? <p className="font-semibold text-stone-300 sm:space-x-6 space-x-4">
        <span>{totalItems} pizzas</span>
        <span>{totalPric}€ </span>
      </p> : ''}
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
