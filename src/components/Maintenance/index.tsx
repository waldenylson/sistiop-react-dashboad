import React from 'react';

import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MaintenanceCard from './MaintenanceCard/index';

import MaintenanceContentLoader from '../ContentLoader/Maintenance';

const Maintenance: React.FC = () => {
  const [loading, setLoading] = React.useState(false);

  return (
    <div className="card border-dark mb-3 center">
      <div className="card-header">
        <h3>
          <b>
            <FontAwesomeIcon icon={faCogs} />
            &nbsp; MANUTENÇÕES PROGRAMADAS
          </b>
        </h3>
      </div>

      {loading ? (
        <>
          <MaintenanceContentLoader />
          <MaintenanceContentLoader />
        </>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            placeContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <MaintenanceCard radar="teste1" />
          <MaintenanceCard radar="teste1" />
          <MaintenanceCard radar="teste1" />
          <MaintenanceCard radar="teste1" />
          <MaintenanceCard radar="teste1" />
          <MaintenanceCard radar="teste1" />
          <MaintenanceCard radar="teste1" />
          <MaintenanceCard radar="teste1" />
        </div>
      )}
    </div>
  );
};

export default Maintenance;
