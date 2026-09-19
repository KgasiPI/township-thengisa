import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function MyAccount() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("profile");

  // Form states initialized with current user data or default fallbacks
  const [formData, setFormData] = useState({
    name: user?.name || "John Doe",
    email: user?.email || "john@example.com",
    phone: user?.phone || "+27 82 123 4567",
    address: user?.address || "123 Main Street, Johannesburg",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account details updated successfully!");
  };

  return (
    <div className="flex-1 py-8 bg-neutral-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-neutral-900 mb-8 tracking-tight">
          My Account
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          
          {/* Navigation Sidebar */}
          <div className="bg-white p-4 rounded-xl shadow-xs border border-neutral-200">
            <nav className="flex flex-col gap-1">
              <button
                onClick={() => setActiveTab("profile")}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-colors cursor-pointer ${
                  activeTab === "profile"
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                }`}
              >
                Profile Details
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-colors cursor-pointer ${
                  activeTab === "security"
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                }`}
              >
                Security & Password
              </button>
              <button
                onClick={() => setActiveTab("preferences")}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-colors cursor-pointer ${
                  activeTab === "preferences"
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                }`}
              >
                Preferences
              </button>
            </nav>
          </div>

          {/* Main Form Content Area */}
          <div className="md:col-span-3 bg-white p-6 sm:p-8 rounded-xl shadow-xs border border-neutral-200">
            {activeTab === "profile" && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-xl font-bold text-neutral-900 pb-3 border-b border-neutral-100">
                  Profile Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-neutral-800 text-sm transition-all"
                      required
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-neutral-800 text-sm transition-all"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-neutral-800 text-sm transition-all"
                    />
                  </div>

                  {/* Delivery Address */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      Delivery Address
                    </label>
                    <textarea
                      name="address"
                      rows="3"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-neutral-800 text-sm transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Action Button */}
                <div className="pt-4 border-t border-neutral-100 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg shadow-xs transition-colors cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            )}

            {activeTab === "security" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-neutral-900 pb-3 border-b border-neutral-100">
                  Security Settings
                </h2>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full max-w-md px-4 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-sm mb-4"
                  />
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full max-w-md px-4 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-sm mb-6"
                  />
                  <div>
                    <button className="px-6 py-2.5 bg-neutral-800 hover:bg-neutral-900 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer">
                      Update Password
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "preferences" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-neutral-900 pb-3 border-b border-neutral-100">
                  Notification Preferences
                </h2>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 text-blue-600 rounded border-neutral-300 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-neutral-700">
                      Email notifications for new orders and tracking updates
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 text-blue-600 rounded border-neutral-300 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-neutral-700">
                      Promotions and special discounts newsletters
                    </span>
                  </label>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}