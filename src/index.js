import React from "react";
import { ReactDOM } from "react-dom";
import "./index.css";
import App from "./containers/App";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context/Context";

ReactDOM.render (
    <React.StrictMode>
        <BrowserRouter>
            <ContextProvider>
                <App />
            </ContextProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);