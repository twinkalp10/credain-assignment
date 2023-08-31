import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransactionDetails from "./components/TransactionDetails";
import { DataContextProvider } from "./components/context/DataContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DataContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/transaction/:transactionId"
            element={<TransactionDetails />}
          />
        </Routes>
      </BrowserRouter>
    </DataContextProvider>
  </React.StrictMode>
);

reportWebVitals();
