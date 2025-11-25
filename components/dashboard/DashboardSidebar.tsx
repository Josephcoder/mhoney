"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function DashboardSidebar() {
const [open, setOpen] = useState(true);


return (
<aside
className={`bg-white shadow-md border-r h-screen transition-all duration-300 flex flex-col ${
open ? "w-64" : "w-20"
}`}
>
{/* Sidebar Header */}
<div className="flex items-center justify-between p-4 border-b">
<h2 className={`text-xl font-semibold ${open ? "block" : "hidden"}`}>Menu</h2>
<button onClick={() => setOpen(!open)} className="p-2">
{open ? <X size={20} /> : <Menu size={20} />}
</button>
</div>


{/* Navigation Menu */}
<nav className="flex flex-col p-4 gap-4 text-gray-700 font-medium">
<a href="/dashboard" className="hover:text-blue-600">
{open ? "Dashboard Home" : "🏠"}
</a>
<a href="/dashboard/orders" className="hover:text-blue-600">
{open ? "Orders" : "📦"}
</a>
<a href="/dashboard/profile" className="hover:text-blue-600">
{open ? "Profile" : "👤"}
</a>
<a href="/dashboard/settings" className="hover:text-blue-600">
{open ? "Settings" : "⚙️"}
</a>
</nav>
</aside>
);
}