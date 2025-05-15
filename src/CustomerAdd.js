import React, { useState } from "react";
import CustomerView from "./CustomerView";
import { addCustomer as addCustomerAction } from "./slices/customerSlice";
import { useDispatch } from "react-redux";

export default function CustomerAdd() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addCustomer = () => {
    if (input) {
      dispatch(addCustomerAction(input));
      setInput("");
    }
  };

  return (
    <>
      <div>
        <h3>Add Customer</h3>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="button" onClick={addCustomer}>
          Add Customer
        </button>
      </div>
      <CustomerView />
    </>
  );
}
