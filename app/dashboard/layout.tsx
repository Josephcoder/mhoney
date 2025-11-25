import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import DashboardFooter from "@/components/dashboard/DashboardFooter";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="flex-1">
        <DashboardNavbar />
        <main className="p-6">{children}</main>
        <DashboardFooter />
      </div>
    </div>
  );
}
