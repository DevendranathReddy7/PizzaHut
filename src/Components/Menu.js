import { useLoaderData } from "react-router-dom";
import { getMenu } from "../Sevices/apiRestaurant";

function Menu() {
  const menu = useLoaderData() //gets data from loader which we provoded in rote
  return (
    menu.map(item => <li key={item.id}>
      <p>{item.name}</p>
      <img src={item.imageUrl} alt={item.name} />
      <p>{item.unitPrice}</p>
    </li>

    )
  )
}

export const loader = async () => {
  const data = await getMenu()
  return data
}
export default Menu;
