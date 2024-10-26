import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthContext from "./context/AuthProvider.tsx";
import TaskContext from "./context/TaskContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContext>
      <TaskContext>
        <App />
      </TaskContext>
    </AuthContext>
  </StrictMode>
);
