import * as React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Employees from "./components/Employees";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
      <Employees />
    </div>
  );
}

export default App;
