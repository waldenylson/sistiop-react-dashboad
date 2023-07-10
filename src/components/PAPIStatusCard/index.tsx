import React from 'react';

import { Container } from './styles';

import {
  faCalendar,
  faCloud,
  faDatabase,
  faExclamationCircle,
  faExclamationTriangle,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useQuery } from '@tanstack/react-query';
import api from '../../services/api.service';
import { Radio } from 'react-loader-spinner';

interface IPAPIInfo {
  brilho: number;
  database: string;
  operacao: boolean;
  status: string;
  updated: string;
}

const PAPIStatusCard: React.FC = () => {
  const [papiInfo, setPapiInfo] = React.useState<IPAPIInfo | null>();

  const { isFetching } = useQuery(
    ['PAPIInfo'],
    async () => {
      await api.get('/api/getPAPIInfo').then(response => {
        setPapiInfo(response.data[0]);
        console.log(response.data[0]);
      });
    },
    {
      refetchInterval: 60000 * 5, //5 minutos
    },
  );

  return (
    <div className="card border-dark mb-3 center">
      <div className="card-header" style={{ height: 60, fontSize: 27 }}>
        <b>
          <FontAwesomeIcon icon={faExclamationTriangle} />
          &nbsp; STATUS DO PAPI DTCEA-FN
        </b>
      </div>

      <Container
        className="card-body"
        style={{
          height: 200,
          fontSize: 20,
        }}
      >
        {isFetching && !papiInfo ? (
          <div style={{ textAlign: 'center' }}>
            <Radio
              visible={true}
              colors={['#fff', '#fff', '#fff']}
              height="80"
              width="80"
              ariaLabel="radio-loading"
            />
          </div>
        ) : (
          <>
            <div className="parent">
              <div className="div1">
                <FontAwesomeIcon icon={faCloud} />
                &nbsp;OPERAÇÃO: &nbsp;{papiInfo?.operacao
                  ? 'Remoto'
                  : 'Local'}{' '}
              </div>
              <div className="div2">
                {' '}
                <FontAwesomeIcon icon={faLightbulb} />
                &nbsp;NÍVEL BRILHO:{' '}
                {papiInfo?.brilho === -1
                  ? 'Falha Acessar o CLP'
                  : papiInfo?.brilho === 0
                  ? 'PAPI Desativado'
                  : papiInfo?.brilho}
              </div>
              <div className="div3">
                {' '}
                <FontAwesomeIcon icon={faDatabase} />
                &nbsp;SERVIDOR BD:&nbsp;
                {papiInfo?.database}
              </div>
              <div className="div4">
                {' '}
                <FontAwesomeIcon icon={faExclamationCircle} />
                &nbsp;STATUS CLP:&nbsp;
                {papiInfo?.status}
              </div>
              <div className="div5">
                <FontAwesomeIcon icon={faCalendar} />
                &nbsp;ULTIMO TESTE:&nbsp;
                {papiInfo?.updated}&nbsp;UTC
              </div>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default PAPIStatusCard;
