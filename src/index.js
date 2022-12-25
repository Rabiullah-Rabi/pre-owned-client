import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthProvider from "./contexts/AuthProvider";
import "animate.css";
import { Toaster } from "react-hot-toast";


// AOS.init();
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Toaster />
      
      <App />
    </AuthProvider>
  </QueryClientProvider>
);
