import React from 'react';

import WarningCard from '../../components/WarningCard';
import SystemInfoCard from '../../components/SystemInfoCard';
import MaintenanceCard from '../../components/Maintenance';

const Dashboard: React.FC = () => {
  return (
    <div
      className="container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid green',
        flex: 1,
        padding: 5,
        width: '100%',
      }}
    >
      <div
        className="top-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '99vh',
          width: '100%',
          border: '1px solid yellow',
          padding: 5,
          margin: '0 0 5px 0',
        }}
      >
        <div
          className="left-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '20%',
            border: '1px solid blue',
            padding: 5,
          }}
        >
          left
        </div>
        <div
          className="center-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            border: '1px solid pink',
            padding: 5,
            margin: '0 10px 0 10px',
          }}
        >
          center
        </div>
        <div
          className="right-container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '20%',
            border: '1px solid white',
          }}
        >
          right
        </div>
      </div>
      <div
        className="bottom-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          border: '1px solid red',
          width: '100%',
        }}
      >
        <div
          className="data-container"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            border: '1px solid white',
            margin: '0 10px 0 0',
          }}
        >
          DATA
        </div>
        <div
          className="clock-container"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '20%',
            border: '1px solid white',
          }}
        >
          CLOCK
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
