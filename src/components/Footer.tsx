import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-black flex items-center justify-center">
                <span className="text-white font-bold text-xl italic">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Nexus</span>
            </Link>
            <p className="max-w-xs text-sm text-gray-500 leading-relaxed">
              The world's leading marketplace for high-quality digital assets. 
              Empowering creators to build faster and better.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Marketplace</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/search" className="hover:text-black">All Assets</Link></li>
              <li><Link to="/search?category=templates" className="hover:text-black">Templates</Link></li>
              <li><Link to="/search?category=ui-kits" className="hover:text-black">UI Kits</Link></li>
              <li><Link to="/search?category=icons" className="hover:text-black">Icons</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/about" className="hover:text-black">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-black">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-black">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/privacy" className="hover:text-black">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-black">Terms of Service</Link></li>
              <li><Link to="/license" className="hover:text-black">License</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Nexus Marketplace. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-black transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors">Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
