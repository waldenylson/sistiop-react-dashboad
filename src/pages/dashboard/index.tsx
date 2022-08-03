import React from 'react';

import WarningCard from '../../components/WarningCard';
import SystemInfoCard from '../../components/SystemInfoCard';
import MaintenanceCard from '../../components/Maintenance';
import NotificationsCard from '../../components/NotificationsCard';

const Dashboard: React.FC = () => {
  return (
    <>
      <div
        style={{
          width: '25%',
          margin: 2,
          alignContent: 'center',
          border: '1px solid #fff',
        }}
      >
        <WarningCard />
        <NotificationsCard />
      </div>
      <div
        style={{
          width: '1150px',
          margin: 2,
          alignContent: 'center',
          border: '1px solid #fff',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MaintenanceCard />
      </div>
      <div
        style={{
          width: '290px',
          margin: 2,
          alignContent: 'center',
          border: '1px solid #fff',
        }}
      >
        <SystemInfoCard />
      </div>
    </>
  );
};

export default Dashboard;
