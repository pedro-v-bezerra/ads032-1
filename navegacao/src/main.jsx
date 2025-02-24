import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import UserContext, { UserContextProvider } from "./contexts/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
