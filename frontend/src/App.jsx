import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/main";
import Present_Detail from "./pages/present_detail";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        {/* <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Present_Detail />} />
        </Routes> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
