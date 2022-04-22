import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import LandingPage from "./screens/main/landingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdsPage from "./screens/adsPage/AdsPage";

const App = () => (
  <BrowserRouter>
    <Header />
    <main className="main_height">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/adsPage" element={<AdsPage />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
