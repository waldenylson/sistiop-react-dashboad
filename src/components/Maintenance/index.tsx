import React from 'react';

import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MaintenanceCard from './MaintenanceCard/index';

import MaintenanceContentLoader from '../ContentLoader/Maintenance';
import { useQuery } from '@tanstack/react-query';
import api from '../../services/api.service';

export interface IMNTdata {
  id: number;
  radarNome: string;
  data_ini: string;
  data_fim: string;
  hora_ini: string;
  hora_fim: string;
  motivo: string;
}

const Maintenance: React.FC = () => {
  const [mntProg, setMntProg] = React.useState<IMNTdata[] | null>();

  const { isFetching } = useQuery(
    ['MNTProg'],
    async () => {
      await api.get('/api/getMntProg').then(response => {
        setMntProg(response.data);
      });
    },
    {
      refetchInterval: 60000 * 5, //5 minutos
    },
  );

  return (
    <div className="card border-dark mb-3 center">
      <div className="card-header" style={{ height: 60, fontSize: 30 }}>
        <b>
          <FontAwesomeIcon icon={faCogs} />
          &nbsp; MANUTENÇÕES PROGRAMADAS
        </b>
      </div>

      {isFetching && !mntProg ? (
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
          {mntProg?.map(item => (
            <MaintenanceCard key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Maintenance;
