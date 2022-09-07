import React from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../../services/api.service';

import { Container } from './styles';

import {
  faCloudUpload,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IDACOMAlert {
  server1: number;
  server2: number;
}

const COPMSGDBackupCard: React.FC = () => {
  const [dacomAlert, setDacomAlert] = React.useState<IDACOMAlert>();
  let _dacomAlert: IDACOMAlert;

  const { isFetching } = useQuery(
    ['DACOM'],
    async () => {
      await api
        .get('/api/getStatusDACOM')
        .then(response => {
          response.data.map((item: any, index: any) => {
            if (index in [0, 1]) {
              _dacomAlert = {
                server1: response.data[0].status,
                server2: response.data[1].status,
              };
            }
          });
        })
        .then(() => {
          setDacomAlert(_dacomAlert);
        });
    },
    {
      refetchInterval: 60000 * 5, //5 minutos
    },
  );

  return (
    <Container>
      <div className="card border-dark mb-3 center" style={{ marginTop: -13 }}>
        <div className="card-header " style={{ height: 50, fontSize: 23 }}>
          <FontAwesomeIcon icon={faCloudUpload} />
          <b>&nbsp;COPM SGD Backup</b>
        </div>
        <div className="card-body box-dacom">
          <span className={dacomAlert?.server1 === 0 ? 'error' : ''}>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            &nbsp;SBRTIOp PRIMÁRIO&nbsp;&nbsp;
          </span>
          <span className={dacomAlert?.server2 === 0 ? 'error' : ''}>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            &nbsp;SBRTIOp SECUNDÁRIO&nbsp;&nbsp;
          </span>
        </div>
      </div>
    </Container>
  );
};

export default COPMSGDBackupCard;
