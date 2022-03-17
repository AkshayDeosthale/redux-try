import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeOrder } from "../features/CustomerSlice";
import { addOrder } from "../features/CustomerSlice";

const Food = ({ name, id, food }) => {
  const [orderNameInput, setOrderNameInput] = useState("");
  const customer = useSelector((state) => state.customer.value);

  const dispatch = useDispatch();

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            onChange={(e) => setOrderNameInput(e.target.value)}
            value={orderNameInput}
          />
          <button
            onClick={() => {
              if (!orderNameInput) return;
              dispatch(
                addOrder({
                  id,
                  food: orderNameInput,
                })
              );
              setOrderNameInput("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food;
