import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Products from "./components/Product";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div>
      <header>
        <h1>My E-Commerce Store</h1>
        <nav>
          <button onClick={() => setPage("login")}>Login</button>
          <button onClick={() => setPage("register")}>Register</button>
        </nav>
      </header>
      <main>
        {page === "login" && <Login setPage={setPage} />}
        {page === "register" && <Register />}
        {page === "admin" && <Admin />}
        {page === "products" && <Products />}
      </main>
    </div>
  );
}
export default App;