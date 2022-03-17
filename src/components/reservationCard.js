import React from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../features/CustomerSlice";
import { removeReservation } from "../features/reservation";
import { v4 as uuid } from "uuid";

const ReservationCard = ({ name, index }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(
          addCustomer({
            id: uuid(),
            name,
            food: [""],
          })
        );
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
};

export default ReservationCard;
