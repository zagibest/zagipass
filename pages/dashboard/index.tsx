import DashboardLayout from "../../components/layout/dashboard";
import Table from "../../components/table";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1>Dashboard</h1>
      <Table
        headers={["Name", "Title", "Status", "Role"]}
        rows={[
          ["Bataa", "Software Engineer", "Active", "Admin"],
          ["Dorjoo", "Software Engineer", "Active", "Admin"],
        ]}
      />
    </DashboardLayout>
  );
};

export default Dashboard;
