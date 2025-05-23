import "./App.css";
import FetchItems from "./components/FetchItems";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Navbar />
      <div className="appContent">
        <Outlet />
      </div>
      <FetchItems />
      <Footer />
    </>
  );
}

export default App;
