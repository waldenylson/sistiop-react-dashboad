import React from 'react';

import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MaintenanceCard from './MaintenanceCard/index';

import MaintenanceContentLoader from '../ContentLoader/Maintenance';

import api from '../../services/api.service';

export interface IMNTdata {
  radarNome: string;
  data_ini: string;
  data_fim: string;
  hora_ini: string;
  hora_fim: string;
  motivo: string;
}

const Maintenance: React.FC = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<IMNTdata[] | null>([]);

  /**
   * Carrega animação splash de tela
   */
  React.useEffect(() => {
    setLoading(true);
    mntDataLoad();
  }, []);

  React.useEffect(() => {
    setTimeout(async () => {
      await mntDataLoad();
      console.log('MNT_Temporal_useEfect()');
    }, 60000);
  }, []);

  async function mntDataLoad() {
    api.get('/api/getMntProg').then(response => {
      setData(response.data);
    });
  }

  return (
    <div className="card border-dark mb-3 center">
      <div className="card-header" style={{ height: 60, fontSize: 30 }}>
        <b>
          <FontAwesomeIcon icon={faCogs} />
          &nbsp; MANUTENÇÕES PROGRAMADAS
        </b>
      </div>

      {loading ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            margin: 5,
            alignSelf: 'center',
          }}
        >
          <MaintenanceContentLoader />
          <MaintenanceContentLoader />
          <MaintenanceContentLoader />
          <MaintenanceContentLoader />
          <MaintenanceContentLoader />
          <MaintenanceContentLoader />
        </div>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            margin: 5,
          }}
        >
          {/* <MaintenanceCard /> */}
        </div>
      )}
    </div>
  );
};

export default Maintenance;
