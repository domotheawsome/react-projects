import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
//import { ChakraProvider } from "@chakra-ui/react";
// import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <PersistGate
          loading={<p>loadidng persisted state..</p>}
          persistor={persistor}
        > */}
          <App />
        {/* </PersistGate> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);