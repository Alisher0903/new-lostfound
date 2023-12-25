import { Route, Routes } from "react-router-dom";
import HomeDefault from "./components/home/Home";
import ItemsPage from "./components/items-page/Items-page";
import { Login } from "./components/registerAndLogin/Login";
import { Register } from "./components/registerAndLogin/Regestir";
import AboutLostFound from "./components/about/About";
import SearchHome from "./components/home/components/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeDefault />} />
        <Route path="/Lost and Found" element={<ItemsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutLostFound />} />
        <Route path="/search" element={<SearchHome />} />
      </Routes>
    </>
  );
}

export default App;
