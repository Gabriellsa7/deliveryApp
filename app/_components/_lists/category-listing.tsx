import burgerIcon from "@/assets/category-list-lcons/burguer_icon.svg";
import dishIcon from "@/assets/category-list-lcons/dish_icon.svg";
import iceCreamIcon from "@/assets/category-list-lcons/ice_cream.svg";
import juiceIcon from "@/assets/category-list-lcons/juice_icon.svg";
import pizzaIcon from "@/assets/category-list-lcons/pizza_icon.svg";
import sushiIcon from "@/assets/category-list-lcons/sushi_icon.svg";

const types = [
  {
    id: 1,
    name: "Burger",
    icons: burgerIcon,
    url: "/pages/burger-page",
  },
  {
    id: 2,
    name: "Dish",
    icons: dishIcon,
  },
  {
    id: 3,
    name: "Dessert",
    icons: iceCreamIcon,
  },
  {
    id: 4,
    name: "Juice",
    icons: juiceIcon,
    url: "/pages/juices-page",
  },
  {
    id: 5,
    name: "Pizza",
    icons: pizzaIcon,
  },
  {
    id: 6,
    name: "Japanese",
    icons: sushiIcon,
    url: "/pages/japanese-food",
  },
];

export default types;
