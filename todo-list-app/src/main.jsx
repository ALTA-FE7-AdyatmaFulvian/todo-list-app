import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./styles/index.css";
import "react-pro-sidebar/dist/css/styles.css";
import { ChakraProvider } from "@chakra-ui/react";

import AppRouter from "./routes";
import { store } from "./utils/redux/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  </Provider>
);
