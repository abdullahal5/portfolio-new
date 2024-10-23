import Sidebar from "@/components/dashboard/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen ">
      <div className="h-full overflow-hidden">
        <Sidebar />
      </div>
      <div className="flex-1">
        <div className="bg-violet-50 dark:bg-black h-screen overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
