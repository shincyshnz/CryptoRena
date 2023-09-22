import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import "./App.css";
import {
  HomePage,
  Navbar,
  Cryptocurrencies,
  Exchanges,
  CryptoDetails,
  News,
} from "./components";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage />}></Route>
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies simplified={false} />}
              ></Route>
              <Route exact path="/exchanges" element={<Exchanges />}></Route>
              <Route
                exact
                path="/crypto/:coinId"
                element={<CryptoDetails />}
              ></Route>
              <Route exact path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
