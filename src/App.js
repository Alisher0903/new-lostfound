import { Route, Routes } from "react-router-dom";
import HomeDefault from "./components/home/Home";
import ItemsPage from "./components/items-page/Items-page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeDefault />} />
        <Route path="/Lost and Found" element={<ItemsPage />} />
      </Routes>
    </>
  );
}

export default App;
