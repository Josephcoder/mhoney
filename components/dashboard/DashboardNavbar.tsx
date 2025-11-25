export default function DashboardNavbar() {
return (
<nav className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">
<h1 className="text-xl font-semibold">Dashboard</h1>
<div className="flex gap-6 text-lg">
<a href="/dashboard" className="hover:underline">Home</a>
<a href="/dashboard/orders" className="hover:underline">Orders</a>
<a href="/dashboard/profile" className="hover:underline">Profile</a>
<a href="/dashboard/settings" className="hover:underline">Settings</a>
</div>
</nav>
);
}