import React from "react";

import WarningCard from "../../components/WarningCard";
import SystemInfoCard from "../../components/SystemInfoCard";
import MaintenanceCard from "../../components/MaintenanceCard";

const Dashboard: React.FC = () => {
  return (
    <>
      <div style={{ width: "30%", margin: 2, alignContent: "center" }}>
        <WarningCard />
      </div>
      <div style={{ width: "1050px", margin: 2 }}>
        <MaintenanceCard />
      </div>
      <div style={{ width: "300px", margin: 2 }}>
        <SystemInfoCard />
      </div>
    </>
  );
};

export default Dashboard;
