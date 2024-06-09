import * as React from "react";
import {createRoot} from "react-dom/client";
import App from "./containers/app.tsx";
import "./styles.scss";

const root=createRoot(document.getElementById("root") as HTMLElement);
root.render(<App/>);