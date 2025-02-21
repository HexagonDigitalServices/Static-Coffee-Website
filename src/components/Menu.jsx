import React from "react";
import { FaCoffee, FaMugHot, FaLeaf, FaBolt } from "react-icons/fa";
import Cappuccino from "../assets/Cappuccino.png";
import ChaiLatte from "../assets/ChaiLatte.png";
import Macchiato from "../assets/Macchiato.png";
import Expresso from "../assets/Expresso.png";

const Menu = () => {
  const coffeeItems = [
    {
      name: "Cappuccino",
      icon: <FaCoffee className="w-8 h-8 text-amber-900" />,
      image: Cappuccino,
      desc: "Creamy espresso with steamed milk and thick foam",
      accent: "bg-amber-100",
    },
    {
      name: "Chai Latte",
      icon: <FaLeaf className="w-8 h-8 text-amber-900" />,
      image: ChaiLatte,
      desc: "Spiced black tea with steamed milk and honey",
      accent: "bg-orange-100",
    },
    {
      name: "Macchiato",
      icon: <FaMugHot className="w-8 h-8 text-amber-900" />,
      image: Macchiato,
      desc: "Espresso with a dollop of milk foam",
      accent: "bg-rose-100",
    },
    {
      name: "Expresso",
      icon: <FaBolt className="w-8 h-8 text-amber-900" />,
      image: Expresso,
      desc: "Strong black coffee shot, rich and aromatic",
      accent: "bg-brown-100",
    },
  ];

  return (
    <div>
      ☕
    </div> 
  )
}

export default Menu;
