import React from "react";
import "./FoodGrid.css";
const dishes = [
  {
    name: "Italian-style tomato salad",
    time: "14 minutes",
    image: "/images/1.png"
  },
  {
    name: "Vegetable and shrimp spaghetti",
    time: "15 minutes",
    image: "/images/2.png"
  },
  {
    name: "Lotus delight salad",
    time: "20 minutes",
    image: "/images/3.png"
  },
  {
    name: "Snack cakes",
    time: "21 minutes",
    image: "/images/4.png"
  },
  {
    name: "Salad with cabbage and shrimp",
    time: "32 minutes",
    image: "/images/5.png"
  },
  {
    name: "Bean, shrimp, and potato salad",
    time: "32 minutes",
    image: "/images/6.png"
  },
  {
    name: "Sunny-side up fried eggs",
    time: "32 minutes",
    image: "/images/7.png"
  },
  {
    name: "Lotus delight salad",
    time: "32 minutes",
    image: "/images/8.png"
  }
];

const FoodGrid = () => {
  return (
  
      <div className="food-grid">
        {dishes.slice(0, 8).map((dish, index) => (
          <div key={index} className="food-card">
            <img src={dish.image} alt={dish.name} />
            <div className="content">
              <h3>{dish.name}</h3>
              <p>{dish.time}</p>
            </div>
          </div>
        ))}
      </div>
    
  );
};


export default FoodGrid;
