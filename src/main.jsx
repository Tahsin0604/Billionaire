import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./route/Router";
import { Provider } from "react-redux";
import store from "./redux/store";
import Context from "./context/Context";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <Context>
          <RouterProvider router={router} />
        </Context>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
