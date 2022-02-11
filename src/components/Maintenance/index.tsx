import React from 'react';

import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MaintenanceCard from './MaintenanceCard/index';

import MaintenanceContentLoader from '../ContentLoader/Maintenance';

const Maintenance: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      <div className="card border-dark mb-3 center">
        <div className="card-header">
          <h3>
            <b>
              <FontAwesomeIcon icon={faCogs} />
              &nbsp; MANUTENÇÕES PROGRAMADAS
            </b>
          </h3>
        </div>
        <div
          className="card-body mnt-card"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}
        >
          {loading ? (
            <>
              <p>
                <MaintenanceContentLoader />
                <MaintenanceContentLoader />
              </p>
            </>
          ) : (
            // sobreaviso?.map((item, index) => (
            //   <p className="card-text-content" style={{ fontSize: 25 }}>
            //     {sobreavisoTiop(new Date().getHours()) && index === 0
            //       ? `${item.dadosEscalaResources[0].escalado.slice(
            //           0,
            //           -15,
            //         )} (${parseAgenda(item.dadosEscalaResources[0].ramal)})`
            //       : `${item.dadosEscalaResources[1].escalado.slice(
            //           0,
            //           -15,
            //         )} (${parseAgenda(item.dadosEscalaResources[1].ramal)})`}
            //   </p>
            // ))
            <MaintenanceCard />
          )}
        </div>
      </div>
    </>
  );
};

export default Maintenance;
