import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Main from "./pages/main";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
