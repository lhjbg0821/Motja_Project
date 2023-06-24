import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-red-300">
      <BrowserRouter>
        <Header />
        <Footer />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
