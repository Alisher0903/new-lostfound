import { Route, Routes } from "react-router-dom";
import HomeDefault from "./components/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeDefault />} />
      </Routes>
    </>
  );
}

export default App;
