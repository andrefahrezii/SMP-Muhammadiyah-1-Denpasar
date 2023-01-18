import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";


ConfigProvider.config({
  theme: {
    primaryColor: "#e55300"
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(routes);
root.render(
  <React.StrictMode>
    <Suspense >
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
