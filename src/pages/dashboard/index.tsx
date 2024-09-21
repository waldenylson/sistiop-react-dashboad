import React from 'react';

import WarningCard from '../../components/WarningCard';
import SystemInfoCard from '../../components/SystemInfoCard';
import MaintenanceCard from '../../components/Maintenance';
import NotificationsCard from '../../components/NotificationsCard';
import RPLCard from '../../components/RPLCard';
import GenericDevInfo from '../../components/GenericDevInfo';
import PAPIStatusCard from '../../components/PAPIStatusCard';

const Dashboard: React.FC = () => {
  return (
    <>
      <div
        style={{
          width: '25%',
          margin: 2,
          alignContent: 'stretch',
          border: '1px solid #fff',
          borderRadius: 5,
        }}
      >
        <WarningCard />
        <PAPIStatusCard />
        <NotificationsCard />
      </div>
      <div
        style={{
          width: '1150px',
          margin: 2,
          alignContent: 'stretch',
          border: '1px solid #fff',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 5,
        }}
      >
        <MaintenanceCard />
        <GenericDevInfo />
      </div>
      <div
        style={{
          width: '290px',
          margin: 2,
          alignContent: 'stretch',
          borderRadius: 5,
          border: '1px solid #fff',
        }}
      >
        <SystemInfoCard />
        <RPLCard />
      </div>
    </>
  );
};

export default Dashboard;
