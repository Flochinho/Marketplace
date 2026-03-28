import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, TrendingUp, ShieldCheck } from "lucide-react";
import { Button } from "./ui/Button";
import { motion } from "motion/react";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 ring-1 ring-inset ring-gray-200">
                <TrendingUp className="mr-1 h-3.5 w-3.5 text-black" />
                New: UI Kits for React 19
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Build faster with <span className="text-gray-500 italic">premium</span> digital assets.
              </h1>
              <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                Nexus is the marketplace for high-quality UI kits, templates, and icons. 
                Curated by world-class designers to help you ship faster and better.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <Link to="/search">
                  <Button size="lg" className="w-full sm:w-auto gap-2">
                    Explore Marketplace <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/auth?mode=signup">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Sell your assets
                  </Button>
                </Link>
              </div>
              
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-500 sm:justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-black" />
                  <span>Curated Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-black" />
                  <span>Secure Payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-black" />
                  <span>Instant Delivery</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto w-full rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl shadow-gray-200/50"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-40 rounded-xl bg-gray-50 p-4 flex flex-col justify-end">
                    <div className="h-4 w-24 rounded bg-gray-200 mb-2" />
                    <div className="h-3 w-16 rounded bg-gray-100" />
                  </div>
                  <div className="h-56 rounded-xl bg-gray-100 p-4 flex flex-col justify-end">
                    <div className="h-4 w-32 rounded bg-gray-200 mb-2" />
                    <div className="h-3 w-20 rounded bg-gray-100" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-56 rounded-xl bg-gray-100 p-4 flex flex-col justify-end">
                    <div className="h-4 w-28 rounded bg-gray-200 mb-2" />
                    <div className="h-3 w-18 rounded bg-gray-100" />
                  </div>
                  <div className="h-40 rounded-xl bg-gray-50 p-4 flex flex-col justify-end">
                    <div className="h-4 w-24 rounded bg-gray-200 mb-2" />
                    <div className="h-3 w-16 rounded bg-gray-100" />
                  </div>
                </div>
              </div>
              
              {/* Floating element */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-2xl bg-black p-4 text-white shadow-xl hidden md:block">
                <div className="text-xs font-bold uppercase tracking-widest opacity-60">Sales</div>
                <div className="text-2xl font-bold mt-1">+124%</div>
                <div className="h-1 w-full bg-white/20 rounded-full mt-2 overflow-hidden">
                  <div className="h-full w-3/4 bg-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
