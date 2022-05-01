import React from 'react';

import WarningCard from '../../components/WarningCard';
import SystemInfoCard from '../../components/SystemInfoCard';
import MaintenanceCard from '../../components/Maintenance';

const Dashboard: React.FC = () => {
  return (
    <>
      <div style={{ width: '25%', margin: 2, alignContent: 'center' }}>
        <WarningCard />
      </div>
      <div style={{ width: '1150px', margin: 2 }}>
        <MaintenanceCard />
      </div>
      <div style={{ width: '290px', margin: 2 }}>
        <SystemInfoCard />
      </div>
    </>
  );
};

export default Dashboard;
