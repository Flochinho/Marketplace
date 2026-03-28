import { Link } from "react-router-dom";
import { Trash2, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "../components/ui/Button";
import { formatCurrency } from "../lib/utils";
import { motion } from "motion/react";

export function Cart() {
  // Mock cart items
  const cartItems = [
    {
      id: "1",
      title: "Modern SaaS UI Kit",
      price: 49,
      category: "UI Kits",
      image: "https://picsum.photos/seed/saas/200/200",
    },
    {
      id: "2",
      title: "Abstract Icon Set",
      price: 19,
      category: "Icons",
      image: "https://picsum.photos/seed/icons/200/200",
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center p-4 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-50">
          <ShoppingBag className="h-10 w-10 text-gray-300" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
        <p className="mt-2 text-gray-500 max-w-xs">
          Looks like you haven't added any assets to your cart yet.
        </p>
        <Link to="/search" className="mt-8">
          <Button size="lg">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-8 space-y-6">
          {cartItems.map((item) => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-6 p-6 rounded-3xl border border-gray-100 bg-white shadow-sm"
            >
              <div className="h-24 w-24 rounded-2xl bg-gray-50 overflow-hidden flex-shrink-0">
                <img src={item.image} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{item.category}</span>
                  <span className="text-sm font-bold text-gray-900">{formatCurrency(item.price)}</span>
                </div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-1">Instant digital delivery</p>
              </div>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500 hover:bg-red-50">
                <Trash2 className="h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/50">
            <h2 className="text-xl font-bold text-gray-900 mb-8">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Estimated Tax (8%)</span>
                <span className="font-medium text-gray-900">{formatCurrency(tax)}</span>
              </div>
              <div className="pt-4 border-t border-gray-50 flex justify-between">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-lg font-bold text-gray-900">{formatCurrency(total)}</span>
              </div>
            </div>

            <Link to="/checkout">
              <Button className="w-full h-14 text-lg gap-2">
                Proceed to Checkout
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                <span>Secure checkout with SSL encryption</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center opacity-40 grayscale">
                <div className="h-6 w-10 bg-gray-200 rounded" />
                <div className="h-6 w-10 bg-gray-200 rounded" />
                <div className="h-6 w-10 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
