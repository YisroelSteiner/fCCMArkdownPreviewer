import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import App from './App.jsx';

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


