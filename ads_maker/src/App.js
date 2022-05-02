import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import LandingPage from "./screens/main/landingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdsPage from "./screens/adsPage/AdsPage";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import CreateAds from "./screens/CreateAds/CreateAds";
import SingleAds from "./screens/SingleAds/SingleAds";

const App = () => (
  <BrowserRouter>
    <Header />
    <main className="main_height">
      <h1 className="main-app">Welcome To Ads Maker</h1>

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/adsPage" element={<AdsPage />} />
        <Route exact path="/createads" element={<CreateAds />} />
        <Route exact path="/ads/:id" element={<SingleAds />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
