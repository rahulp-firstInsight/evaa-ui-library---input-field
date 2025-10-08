import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { InputField } from "./screens/InputField";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <InputField />
  </StrictMode>,
);
