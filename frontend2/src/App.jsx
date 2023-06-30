import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/main";
import Footer from "./components/Footer";
import NftCards from "./components/NftCard";
import Present_Detail from "./pages/present_detail";
import MyPage from "./pages/myPage";

function App() {
  return (
    <div className="bg-red-300">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Present_Detail />} />
          <Route path="/myPage" element={<MyPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
