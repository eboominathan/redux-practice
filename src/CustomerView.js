import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer } from "./slices/customerSlice";

export default function CustomerView() {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  const deleteHandler = (index) => {
    dispatch(deleteCustomer(index));
  };
  return (
    <div>
      <h3>Customer List</h3>
      <ul style={{ listStyleType: "none" }}>
        {customers.map((customer, index) => (
          <li key={index}>
            {customer}
            <button onClick={() => deleteHandler(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
