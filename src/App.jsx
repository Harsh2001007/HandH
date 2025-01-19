import { useRef, useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import FirestoreTest from "./pages/FirestoreTest";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/Dashboard", element: <Dashboard /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Login />
        <Dashboard />
      </RouterProvider>
    </>
  );
}

export default App;
