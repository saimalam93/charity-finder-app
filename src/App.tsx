import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import List from "./components/List";
import Details from "./components/Details";
import { Routes, Route, Link, Outlet, useParams } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
