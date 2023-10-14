import { useDispatch } from "react-redux";
import { formatCurrency } from "../Sevices/helpers";
import Button from "./Button";
import { deleteItem } from "../Sevices/cartSlice";
import Add_Edit_Button from "./Add_Edit_Button";

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
        <Add_Edit_Button pizza={{ id: pizzaId, name, quantity, totalPrice }} onClick={() => handleDeletePizza(pizzaId)}>Delete</Add_Edit_Button>
        {/* <Button type='small' onClick={() => handleDeletePizza(pizzaId)}>Delete</Button> */}
      </div>
    </li>
  );
}

export default CartItem;
