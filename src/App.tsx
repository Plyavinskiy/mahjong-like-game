import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Homepage from "./pages/Homepage/Homepage";

const App: React.FC = () => (
  <Provider store={store}>
    <Homepage />
  </Provider>
);

export default App;
