import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TextField } from "./components/TextField";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <TextField label="Email" placeholder="Enter your email" />
  </StrictMode>,
);

