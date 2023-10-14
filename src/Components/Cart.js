import { Link, Outlet } from 'react-router-dom';
import LinkButton from './LinkButton';
import Button from './Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from '../Sevices/cartSlice';


function Cart() {
  const cart = useSelector(getCart);
  const userName = useSelector(str => str.user.userName)
  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCart())

  }
  return (

    <div className='px-4 py-3'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      {!cart.length ? <h1 className='mt-7 text-xl font-semibold'>Your cart feels so light...Please fill it up!</h1> : <>
        <h2 className='mt-7 text-xl font-semibold'>Your cart,{userName}</h2>
        <ul className='mt-3 divide-y divide-stone-200 border-b'>
          {cart.map(item => (
            <CartItem item={item} key={item.pizzaId} />
          ))}
        </ul>
        <div className='mt-8 space-x-6'>
          <Button type='primary' to="/order/new">Order pizzas</Button>
          <Button type='secondary' onClick={handleClearCart}>Clear cart</Button>
        </div></>}


    </div>
  );
}

export default Cart;
