import "./App.css";
import CustomerAdd from "./CustomerAdd";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Practice</h1>
        <CustomerAdd />
      </div>
    </Provider>
  );
}

export default App;
