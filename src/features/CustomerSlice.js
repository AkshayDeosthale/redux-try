import { createSlice } from "@reduxjs/toolkit";

const Customer = {
  id: "",
  name: "",
  food: [""],
};

// const AddFoodToCustomerPayload = {
//   food: "",
//   id: "",
// };

const initialState = {
  value: [Customer],
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
    removeOrder: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    addCustomer: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
export const { addOrder, removeOrder, addCustomer } = customerSlice.actions;
export default customerSlice.reducer;
