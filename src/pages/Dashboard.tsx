import { useState } from "react";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Package, 
  Settings, 
  LogOut, 
  TrendingUp, 
  Users, 
  DollarSign,
  Plus,
  Edit,
  Trash2,
  ExternalLink
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { formatCurrency } from "../lib/utils";

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [role, setRole] = useState<"buyer" | "seller">("seller");

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "orders", label: role === "seller" ? "Sales" : "My Orders", icon: ShoppingBag },
    { id: "listings", label: "My Listings", icon: Package, hide: role === "buyer" },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-gray-50/50">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-100 bg-white p-6 hidden md:block">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 mb-10 px-2">
            <div className="h-10 w-10 rounded-full bg-gray-100" />
            <div>
              <div className="text-sm font-bold text-gray-900">Alex Designer</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{role} Account</div>
            </div>
          </div>

          <nav className="flex-1 space-y-1">
            {sidebarItems.filter(item => !item.hide).map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  activeTab === item.id 
                    ? "bg-black text-white shadow-lg shadow-gray-200" 
                    : "text-gray-500 hover:bg-gray-50 hover:text-black"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-6 border-t border-gray-100">
            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 transition-all">
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 capitalize">
              {activeTab}
            </h1>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setRole(role === "buyer" ? "seller" : "buyer")}>
                Switch to {role === "buyer" ? "Seller" : "Buyer"}
              </Button>
              {role === "seller" && (
                <Button size="sm" className="gap-2">
                  <Plus className="h-4 w-4" /> New Listing
                </Button>
              )}
            </div>
          </div>

          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-green-50 flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Total Revenue</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{formatCurrency(12450)}</div>
                  <div className="mt-2 text-xs text-green-600 font-bold">+12% from last month</div>
                </div>
                
                <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center">
                      <ShoppingBag className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Total Sales</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">156</div>
                  <div className="mt-2 text-xs text-blue-600 font-bold">+8% from last month</div>
                </div>

                <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-purple-50 flex items-center justify-center">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Followers</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">842</div>
                  <div className="mt-2 text-xs text-purple-600 font-bold">+24 new this week</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="rounded-3xl border border-gray-100 bg-white overflow-hidden shadow-sm">
                <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                  <h3 className="font-bold text-gray-900">Recent Sales</h3>
                  <Button variant="ghost" size="sm">View All</Button>
                </div>
                <div className="divide-y divide-gray-50">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-gray-100" />
                        <div>
                          <div className="text-sm font-bold text-gray-900">Modern SaaS UI Kit</div>
                          <div className="text-xs text-gray-400">Sold to User_{i} • 2 hours ago</div>
                        </div>
                      </div>
                      <div className="text-sm font-bold text-gray-900">{formatCurrency(49)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "listings" && role === "seller" && (
            <div className="grid grid-cols-1 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-3xl border border-gray-100 bg-white p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                  <div className="flex items-center gap-6">
                    <div className="h-24 w-24 rounded-2xl bg-gray-100 overflow-hidden">
                      <img src={`https://picsum.photos/seed/list${i}/200/200`} className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Modern SaaS UI Kit</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">UI Kits</span>
                        <span className="text-xs font-bold text-green-600 uppercase tracking-widest">Active</span>
                      </div>
                      <div className="flex items-center gap-6 mt-4">
                        <div className="text-center">
                          <div className="text-sm font-bold text-gray-900">124</div>
                          <div className="text-[10px] text-gray-400 uppercase">Sales</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-bold text-gray-900">{formatCurrency(49)}</div>
                          <div className="text-[10px] text-gray-400 uppercase">Price</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-bold text-gray-900">4.9</div>
                          <div className="text-[10px] text-gray-400 uppercase">Rating</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 w-full md:w-auto">
                    <Button variant="outline" size="sm" className="flex-1 md:flex-none gap-2">
                      <Edit className="h-4 w-4" /> Edit
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1 md:flex-none text-red-500 hover:text-red-600 hover:bg-red-50">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
