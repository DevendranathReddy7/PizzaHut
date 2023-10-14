import { useDispatch, useSelector } from "react-redux"
import Button from "./Button"
import { addItem, decreaseItemsQuantity, getCart, increaseItemsQuantity } from "../Sevices/cartSlice"

const Add_Edit_Button = ({ pizza }) => {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

    const dispatch = useDispatch()

    const cartItems = useSelector(getCart)
    console.log(id)
    console.log(cartItems)
    const alreadyAddedItem = cartItems.find(item => item.pizzaId === id)
    console.log(alreadyAddedItem)
    const handleAddToCart = () => {
        const NewItem = {
            pizzaId: id,
            name,
            quantity: 1,
            unitPrice,
            totalPrice: unitPrice * 1,
        }
        if (alreadyAddedItem) return ''
        dispatch(addItem(NewItem))
    }

    const handleDecrease = (id) => {
        dispatch(decreaseItemsQuantity(id))
    }

    const handleIncrease = (id) => {
        dispatch(increaseItemsQuantity(id))
    }
    return (
        <div>
            {alreadyAddedItem ? <Button type='small' onClick={handleAddToCart}>
                <Button type='count' onClick={() => handleDecrease(id)}>-</Button>
                {alreadyAddedItem.quantity}
                <Button type='count' onClick={() => handleIncrease(id)}>+</Button>
            </Button>
                : <Button type='small' onClick={handleAddToCart}>Add to cart</Button>}


        </div>
    )
}
export default Add_Edit_Button