import React from 'react';

import WarningCard from '../../components/WarningCard';
import SystemInfoCard from '../../components/SystemInfoCard';
import MaintenanceCard from '../../components/Maintenance';
import NotificationsCard from '../../components/NotificationsCard';
import RPLCard from '../../components/RPLCard';
import GenericDevInfo from '../../components/GenericDevInfo';
import COPMSGDBackupCard from '../../components/COPMSGDBackupCard';

const Dashboard: React.FC = () => {
  return (
    <>
      <div
        style={{
          width: '25%',
          margin: 2,
          alignContent: 'center',
          border: '1px solid #fff',
          borderRadius: 5,
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
          alignContent: 'center',
          border: '1px solid #fff',
          borderRadius: 5,
        }}
      >
        <SystemInfoCard />
        <RPLCard />
        <COPMSGDBackupCard />
      </div>
    </>
  );
};

export default Dashboard;
