import React from 'react';

import {
  faDesktop,
  faCode,
  faInfoCircle,
  faCalendar,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

import { format } from 'date-fns';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import api from '../../services/api.service';
import { useQuery } from '@tanstack/react-query';
import SystemInfoDetail from './SystemInfoDetail';

import { Container } from './styles';

export interface IInfSistemas {
  sistema: string;
  versao: string;
  dt_sistema: Date | string;
  centro: string;
  v_bds: string;
  dt_bds: Date | string;
}

const SystemInfoCard: React.FC = () => {
  const [infSis, setInfSis] = React.useState<IInfSistemas[] | []>();

  const { isFetching } = useQuery(
    ['InfSis'],
    async () => {
      await api.get('/api/getInfSis').then(response => {
        setInfSis(response.data);
      });
    },
    {
      refetchInterval: 60000 * 5, //5 minutos
    },
  );

  return (
    <Container>
      <div className="teste card border-dark mb-3">
        <div
          className="card-header center"
          style={{ height: 60, fontSize: 30 }}
        >
          <b>
            <FontAwesomeIcon icon={faDesktop} />
            &nbsp; SISTEMAS
          </b>
        </div>
        <div className="card-body" style={{ fontSize: 15 }}>
          <p>
            <span className="badge bg-dark span-badge-name-titles">ACC-RE</span>
            <SystemInfoDetail
              index={0}
              isFetching={isFetching}
              infSis={infSis}
            />

            <span className="badge bg-dark span-badge-name-titles">ACC-AO</span>
            <SystemInfoDetail
              index={3}
              isFetching={isFetching}
              infSis={infSis}
            />
            <span className="badge bg-dark span-badge-name-titles">APP-RF</span>
            <SystemInfoDetail
              index={1}
              isFetching={isFetching}
              infSis={infSis}
            />

            <span className="badge bg-dark span-badge-name-titles">COPM3</span>
            <SystemInfoDetail
              index={2}
              isFetching={isFetching}
              infSis={infSis}
            />
          </p>
        </div>
      </div>
    </Container>
  );
};

export default SystemInfoCard;
