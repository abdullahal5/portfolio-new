import Sidebar from "@/components/dashboard/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 h-screen bg-violet-50 dark:bg-black">{children}</div>
    </div>
  );
};

export default AdminLayout;
