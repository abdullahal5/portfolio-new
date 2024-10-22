import Sidebar from "@/components/dashboard/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="h-full">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="bg-violet-50 dark:bg-black">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
