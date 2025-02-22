import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CampaignDetails from './pages/CampaignDetails';
import CreateCampaign from "./pages/CreateCampaign";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaign/:id" element={<CampaignDetails />} />
        <Route path="/create" element={<CreateCampaign />} />
        <Route path="/campaign/:id" element={<CampaignDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;