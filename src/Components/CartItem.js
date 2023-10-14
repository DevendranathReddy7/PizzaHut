import { useDispatch } from "react-redux";
import { formatCurrency } from "../Sevices/helpers";
import Button from "./Button";
import { deleteItem } from "../Sevices/cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch()
  const handleDeletePizza = (id) => {
    dispatch(deleteItem(id))
  }
  return (
    <li className="py-3 ">
      <p className="mb-1 ">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type='small' onClick={() => handleDeletePizza(pizzaId)}>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
