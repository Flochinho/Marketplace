import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  CreditCard, 
  ShieldCheck, 
  CheckCircle,
  Lock
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { useCart } from "../contexts/CartContext";
import { formatCurrency } from "../lib/utils";
import { motion } from "motion/react";
import { toast } from "sonner";

export function Checkout() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(1);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
      toast.success("Payment successful! Your assets are ready for download.");
      clearCart();
    }, 2000);
  };

  if (step === 3) {
    return (
      <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center p-4 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-50"
        >
          <CheckCircle className="h-12 w-12 text-green-600" />
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-900">Thank you for your purchase!</h2>
        <p className="mt-4 text-gray-500 max-w-md mx-auto">
          Your order has been confirmed. You can now download your assets from your dashboard.
        </p>
        <div className="mt-10 flex gap-4">
          <Link to="/dashboard">
            <Button size="lg">Go to Dashboard</Button>
          </Link>
          <Link to="/">
            <Button variant="outline" size="lg">Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/cart" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black mb-12">
        <ArrowLeft className="h-4 w-4" />
        Back to cart
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Checkout Form */}
        <div className="lg:col-span-7">
          <div className="space-y-12">
            {/* Step 1: Billing Info */}
            <section className={step === 1 ? "opacity-100" : "opacity-50 pointer-events-none"}>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-bold text-white">1</div>
                <h2 className="text-2xl font-bold text-gray-900">Billing Information</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
              </div>
              
              {step === 1 && (
                <Button className="mt-8 w-full sm:w-auto" onClick={() => setStep(2)}>
                  Continue to Payment
                </Button>
              )}
            </section>

            {/* Step 2: Payment */}
            <section className={step === 2 ? "opacity-100" : "opacity-50 pointer-events-none"}>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-bold text-white">2</div>
                <h2 className="text-2xl font-bold text-gray-900">Payment Method</h2>
              </div>

              <div className="rounded-2xl border-2 border-black p-6 bg-gray-50/50 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5" />
                    <span className="font-bold">Credit or Debit Card</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-6 w-10 bg-gray-200 rounded" />
                    <div className="h-6 w-10 bg-gray-200 rounded" />
                  </div>
                </div>

                <form onSubmit={handleCheckout} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Card Number</label>
                    <Input placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Expiry Date</label>
                      <Input placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">CVC</label>
                      <Input placeholder="123" />
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button type="submit" className="w-full h-14 text-lg gap-2" disabled={isProcessing}>
                      {isProcessing ? "Processing..." : `Pay ${formatCurrency(total)}`}
                      {!isProcessing && <Lock className="h-4 w-4" />}
                    </Button>
                  </div>
                </form>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                <ShieldCheck className="h-4 w-4" />
                Your payment information is encrypted and secure.
              </div>
            </section>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/50">
            <h2 className="text-xl font-bold text-gray-900 mb-8">Order Summary</h2>
            
            <div className="space-y-6 mb-8">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="h-16 w-16 rounded-xl bg-gray-50 overflow-hidden flex-shrink-0">
                    <img src={item.images[0]} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-900 line-clamp-1">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.category}</p>
                    <div className="text-sm font-bold text-gray-900 mt-1">{formatCurrency(item.price)}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4 pt-6 border-t border-gray-50">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">{formatCurrency(total)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900 pt-2">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
