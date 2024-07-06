import burger1 from "@/assets/burgers/amirali-mirhashemian-88YAXjnpvrM-unsplash.png";
import burger2 from "@/assets/burgers/amirali-mirhashemian-9Bqiusimq6M-unsplash (1).png";
import burger3 from "@/assets/burgers/amirali-mirhashemian-d-yAWqj-DRg-unsplash.png";
import burger4 from "@/assets/burgers/amirali-mirhashemian-jh5XyK4Rr3Y-unsplash (1).png";
import burger5 from "@/assets/burgers/amirali-mirhashemian-sc5sTPMrVfk-unsplash (1).png";
import burger6 from "@/assets/burgers/amirali-mirhashemian-uhgJYtrO3fY-unsplash 1.png";

import japanese0 from "@/assets/japanese-foods/jesse-ballantyne.png";
import japanese1 from "@/assets/japanese-foods/mahmoud-fawzy.png";
import japanese2 from "@/assets/japanese-foods/mahmoud-fawzy2.png";
import japanese3 from "@/assets/japanese-foods/mahmoud-fawzy3.png";
import japanese4 from "@/assets/japanese-foods/riccardo-bergamini.png";
import japanese5 from "@/assets/japanese-foods/vaishnav-chogale2.png";

import lemonJuice from "@/assets/juices/lemon-juice.png";
import watermelonJuice from "@/assets/juices/watermelon-juice.png";
import citricJuice from "@/assets/juices/citric-juice.png";
import carrotJuice from "@/assets/juices/carrot-juice.png";
import pineappleJuice from "@/assets/juices/pineapple-juice.png";
import orangeJuice from "@/assets/juices/orange-juice.png";

import chickenInSauce from "@/assets/recommended/new_chicken_in_sauce.jpeg";
import citrusShrimp from "@/assets/recommended/citrus-shrimp.jpeg";
import classicRamen from "@/assets/recommended/classic-ramen.jpeg";
import greenTempura from "@/assets/recommended/green-tempura.jpeg";
import hotRollCombo from "@/assets/recommended/hot-holl-combo.webp";
import supremePicanha from "@/assets/recommended/supreme-picanha.jpeg";

const generalFoods = [
  {
    id: 1,
    name: "Beef Burger",
    img: burger1,
    price: 12,
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
  },
  {
    id: 2,
    name: "Bacon Burger",
    img: burger2,
    price: 12,
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
  },
  {
    id: 3,
    name: "Cheese Burger",
    img: burger3,
    price: 12,
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
  },
  {
    id: 4,
    name: "multi-layered cheeseburger",
    img: burger4,
    price: 12,
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
  },
  {
    id: 5,
    name: "Limani Burger",
    img: burger5,
    price: 12,
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
  },
  {
    id: 6,
    name: "Eden Burger",
    img: burger6,
    price: 12,
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
  },
  {
    id: 7,
    name: "Jesse Ballantyne",
    img: japanese0,
    price: 12,
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
  },
  {
    id: 8,
    name: "Mahmoud Fawzy0",
    img: japanese1,
    price: 12,
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
  },
  {
    id: 9,
    name: "Mahmoud Fawzy1",
    img: japanese2,
    price: 12,
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
  },
  {
    id: 10,
    name: "Mahmoud Fawzy2",
    img: japanese3,
    price: 12,
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
  },
  {
    id: 11,
    name: "Riccardo Bergamini",
    img: japanese4,
    price: 12,
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
  },
  {
    id: 12,
    name: "Vaishnav Chogale",
    img: japanese5,
    price: 12,
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
  },
  {
    id: 13,
    name: "Lemon juice",
    img: lemonJuice,
    price: 12,
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
  },
  {
    id: 14,
    name: "Watermelon juice",
    img: watermelonJuice,
    price: 12,
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
  },
  {
    id: 15,
    name: "Orange juice",
    img: orangeJuice,
    price: 12,
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
  },
  {
    id: 16,
    name: "Pineapple juice",
    img: pineappleJuice,
    price: 12,
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
  },
  {
    id: 17,
    name: "Carrot juice",
    img: carrotJuice,
    price: 12,
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
  },
  {
    id: 18,
    name: "Citric juice",
    img: citricJuice,
    price: 12,
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
  },
  {
    id: 19,
    name: "Chicken in Sauce",
    img: chickenInSauce,
    price: 20.0,
    restaurantName: "Bistro Verdejante",
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
    priceWithDiscount: 0,
  },
  {
    id: 20,
    name: "Citrus Shrimp",
    img: citrusShrimp,
    price: 20.0,
    restaurantName: "Bistro Verdejante",
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
    priceWithDiscount: 0,
  },
  {
    id: 21,
    name: "Classic Ramen",
    img: classicRamen,
    price: 20.0,
    restaurantName: "Bistro Verdejante",
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
    priceWithDiscount: 0,
  },
  {
    id: 22,
    name: "Green Tempura",
    img: greenTempura,
    price: 20.0,
    restaurantName: "Bistro Verdejante",
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
    priceWithDiscount: 0,
  },
  {
    id: 23,
    name: "Hot Roll Combo",
    img: hotRollCombo,
    price: 20.0,
    restaurantName: "Bistro Verdejante",
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
    priceWithDiscount: 0,
  },
  {
    id: 24,
    name: "Supreme Picanha",
    img: supremePicanha,
    price: 20.0,
    restaurantName: "Bistro Verdejante",
    discount: true,
    discountPercent: 0.2,
    discountValue: "20%",
    priceWithDiscount: 0,
  },
];

export default generalFoods;
