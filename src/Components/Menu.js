import { useLoaderData } from "react-router-dom";
import { getMenu } from "../Sevices/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData() //gets data from loader which we provoded in rote
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map(pizza => (
        <MenuItem pizza={pizza} key={pizza.id} />
      )

      )}
    </ul>
  )

}

export const loader = async () => {
  const data = await getMenu()
  return data
}
export default Menu;
