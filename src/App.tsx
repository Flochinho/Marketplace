import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { Search } from "./pages/Search";
import { ListingDetail } from "./pages/ListingDetail";
import { Dashboard } from "./pages/Dashboard";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { SellerProfile } from "./pages/SellerProfile";
import { Chat } from "./components/Chat";
import { Toaster } from "sonner";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-black selection:text-white">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/search" element={<Search />} />
                <Route path="/listing/:id" element={<ListingDetail />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/seller/:id" element={<SellerProfile />} />
                {/* Add more routes here */}
              </Routes>
            </main>
            <Footer />
            <Chat />
            <Toaster position="top-center" richColors />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}
