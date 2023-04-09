import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import User from "../components/User.jsx";

const queryClient = new QueryClient();
// const router = createBrowserRouter([
//   {
//     element: <User />,

//     path: "/characters/:rickId",
//     loader: async ({ params }) => {
//       console.log(params);
//     },
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/characters/:rickId" element={<User />} />
          <Route path="/" element={<App />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  </QueryClientProvider>
);
