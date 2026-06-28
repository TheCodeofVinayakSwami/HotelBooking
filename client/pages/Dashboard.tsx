import { Link } from "react-router-dom";
import { LayoutDashboard, Bookmark, Hotel, Plane, CreditCard, FileText, Wallet, User, Settings, LogOut, ChevronRight, TrendingUp, MapPin } from "lucide-react";

export default function Dashboard() {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "#" },
    { icon: Bookmark, label: "My Bookings", href: "#" },
    { icon: Hotel, label: "My Hotels", href: "#" },
    { icon: Plane, label: "My Trips", href: "#" },
    { icon: CreditCard, label: "Payments", href: "#" },
    { icon: FileText, label: "Invoices", href: "#" },
    { icon: Wallet, label: "Wallet", href: "#" },
    { icon: User, label: "Profile", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-card">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-[12px] flex items-center justify-center text-white font-bold text-lg">
              K
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">Travel Hub</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition">
              Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex min-h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-border p-6 hidden lg:block overflow-y-auto">
          <div className="space-y-2 mb-8">
            {menuItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-[12px] font-medium transition ${
                    idx === 0
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:bg-card text-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </a>
              );
            })}
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-red-600 hover:bg-red-50 font-medium transition">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground mt-1">Welcome back, Priya! Here's your travel summary.</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { label: "Upcoming Trips", value: "2", icon: Plane, color: "primary" },
                { label: "Total Bookings", value: "12", icon: Bookmark, color: "accent" },
                { label: "Wallet Balance", value: "₹2,450", icon: Wallet, color: "primary" },
                { label: "Reward Points", value: "1,240", icon: TrendingUp, color: "accent" },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-white rounded-[16px] p-6 soft-shadow border border-border">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                        <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-[12px] flex items-center justify-center ${stat.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                        <Icon className={`w-6 h-6 ${stat.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-[16px] p-6 lg:p-8 soft-shadow border border-border mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Recent Bookings</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Booking ID</th>
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Type</th>
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Amount</th>
                      <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "BK001", type: "Cab", date: "Jan 15, 2024", amount: "₹450", status: "Completed" },
                      { id: "BK002", type: "Hotel", date: "Jan 20, 2024", amount: "₹4,500", status: "Confirmed" },
                      { id: "BK003", type: "Tour", date: "Feb 01, 2024", amount: "₹999", status: "Upcoming" },
                    ].map((booking, idx) => (
                      <tr key={idx} className="border-b border-border hover:bg-card transition">
                        <td className="py-4 px-4 text-foreground font-medium">{booking.id}</td>
                        <td className="py-4 px-4 text-foreground">{booking.type}</td>
                        <td className="py-4 px-4 text-muted-foreground">{booking.date}</td>
                        <td className="py-4 px-4 text-foreground font-semibold">{booking.amount}</td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            booking.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            booking.status === 'Confirmed' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-[16px] p-6 lg:p-8 soft-shadow border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Book Cab", icon: MapPin },
                  { label: "Book Hotel", icon: Hotel },
                  { label: "Download Invoice", icon: FileText },
                  { label: "Support", icon: HelpCircle },
                ].map((action, idx) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={idx}
                      className="flex flex-col items-center gap-3 p-4 bg-card rounded-[12px] hover:bg-muted transition border border-border"
                    >
                      <Icon className="w-6 h-6 text-primary" />
                      <span className="text-sm font-medium text-foreground">{action.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HelpCircle(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
