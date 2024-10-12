import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./Store/authSlice";
import { Header, Footer } from "./Components/main";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, seLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => seLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header></Header>
        <main>
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
    </div>
  ) : null;
}

export default App;
