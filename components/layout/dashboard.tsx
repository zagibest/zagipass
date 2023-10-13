import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen container mx-auto py-32 flex-col">
      {children}
    </div>
  );
};

export default DashboardLayout;
