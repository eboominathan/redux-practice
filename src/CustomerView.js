import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer, addCustomer } from "./slices/customerSlice";

export default function CustomerView() {
  const customers = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  const deleteHandler = (index) => {
    dispatch(deleteCustomer(index));
  };
  const editCustomer = (index) => () => {
    const newName = prompt("Enter new name:", customers[index]);
    if (newName) {
      dispatch(deleteCustomer(index));
      dispatch(addCustomer(newName));
    }
  };

  return (
    <div>
      <h3>Customer List</h3>
      <ul style={{ listStyleType: "none" }}>
        {customers.map((customer, index) => (
          <li key={index}>
            {customer}
            <button onClick={editCustomer(index)}>Edit</button>
            <button onClick={() => deleteHandler(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
