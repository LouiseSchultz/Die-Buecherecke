import React from "react";
import axios from "axios";
// import { Toaster } from 'react-hot-toast'
import Books from "./components/Books";
import Kategorien from "./components/Kategorien";
import Register from "./components/Register";
import Searchbar from "./components/Searchbar";
import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Warenkorb from "./components/Warenkorb";
import BookData from "./Data.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true

function App() {
  return (
    <>
      {" "}
      <Router>
        {" "}
        <Books />
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<Landingpage />} />
          <Route path="/kategorien" element={<Kategorien />} />
          <Route path="/login" element={<Login />} />
          <Route path="/warenkorb" element={<Warenkorb />} />
          {/* <Toaster position='bottom-right' toastOptions={{duration: 2000}} /> */}
        </Routes>        <Searchbar placeholder="Enter a Book Name..." data={BookData} />

      </Router>
    </>
  );
}

export default App;
