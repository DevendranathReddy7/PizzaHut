import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../Sevices/apiRestaurant";
import Button from "./Button";
import { useSelector } from "react-redux";
import { clearCart, getCart, totalPrice } from "../Sevices/cartSlice";
import store from '../Store'
import { formatCurrency } from "../Sevices/helpers";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );


function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation()
  const cart = useSelector(getCart)
  const userName = useSelector(str => str.user.userName)
  const submitting = navigation.state === 'submitting'
  const formError = useActionData()
  const totalCartPrice = useSelector(totalPrice)
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0
  const finalPrice = totalCartPrice + priorityPrice
  if (cart.length === 0) return ''
  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Let's go!</h2>

      {/* <Form method="post" action="/order/new"> */}
      <Form method="post" >
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input className="input grow" type="text" name="customer" defaultValue={userName} required />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formError && <p className="mt-2 text-xs text-red-900 rounded-md p-2 bg-red-300">{formError.phone}</p>}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input className="input w-full" type="text" name="address" required />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input className="h-6 w-6 accent-yellow-400 focu:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type='primary' disabled={submitting}>{submitting ? 'Placing Order' : `Order Now @${formatCurrency(finalPrice)}`}</Button>
        </div>
      </Form>
    </div>
  );
}
export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  }

  const error = {}
  if (!isValidPhone(order.phone)) {
    error.phone = 'Please enter valid phone number.'
  }
  if (Object.keys(error).length > 0) return error

  const newOrder = await createOrder(order)
  store.dispatch(clearCart())
  return redirect(`/order/${newOrder.id}`)
}
export default CreateOrder;
