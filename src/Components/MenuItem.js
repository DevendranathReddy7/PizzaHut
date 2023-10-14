import { useDispatch } from "react-redux";
import { formatCurrency } from "../Sevices/helpers";
import Button from "./Button";
import { addItem, increaseItemsQuantity } from "../Sevices/cartSlice";
import Add_Edit_Button from "./Add_Edit_Button";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;


  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`} />
      <div className="flex flex-col grow">
        <p>{name}</p>
        <p className="capitalize">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm font-medium uppercase text-stone-500">Sold out</p>}
          {!soldOut && <Add_Edit_Button pizza={pizza} />}
          {/* {!soldOut && <Button type='small' onClick={handleAddToCart}>Add to cart</Button>} */}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
