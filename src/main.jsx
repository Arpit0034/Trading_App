import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./page/Home/Navbar/Navbar.jsx";
import Home from "./page/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./page/Portfolio.jsx";
import Activity from "./page/Activity.jsx";
import Wallet from "./page/Wallet.jsx";
import Withdrawal from "./page/Withdrawal.jsx";
import PaymentDetails from "./page/PaymentDetails.jsx";
import StockDetails from "./page/StockDetails.jsx";
import WatchList from "./page/WatchList.jsx";
import Profile from "./page/Profile.jsx";
import SearchCoins from "./page/SearchCoins.jsx";
import NotFound from "./page/NotFound.jsx";
import Auth from "./page/Auth/Auth";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Auth />
      {false && (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/withdrawal" element={<Withdrawal />} />
            <Route path="/payment_details" element={<PaymentDetails />} />
            <Route path="/market/:id" element={<StockDetails />} />
            <Route path="/watchlist" element={<WatchList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<SearchCoins />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </BrowserRouter>
  </StrictMode>
);
