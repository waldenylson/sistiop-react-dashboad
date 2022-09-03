import React from 'react';

import { Container } from './styles';

import {
  faCheckCircle,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useRecoilValue } from 'recoil';
import { RPLValidateInfo } from '../RPLCard/recoil.atom';

const NotificationsCard: React.FC = () => {
  const rplAlert = useRecoilValue(RPLValidateInfo);

  return (
    <div className="card border-dark mb-3 center">
      <div className="card-header" style={{ height: 60, fontSize: 27 }}>
        <b>
          <FontAwesomeIcon icon={faExclamationTriangle} />
          &nbsp; NOTIFICAÇÕES DO SISTEMA
        </b>
      </div>

      <Container
        className="card-body"
        style={{
          height: 300,
        }}
      >
        {rplAlert ? (
          <div className="box box-notification box-notification-height">
            <span className="fa-blink">
              RPL VENCENDO OU VENCIDO! <br /> Checar STATUS no SAGITARIO!
            </span>
          </div>
        ) : (
          <>
            <FontAwesomeIcon icon={faCheckCircle} size="10x" />
            <p
              style={{
                fontFamily: 'verdana',
                fontWeight: 'bold',
                fontStyle: 'italic',
                marginTop: 10,
              }}
            >
              Sem novos Alertas!
            </p>
          </>
        )}
      </Container>
    </div>
  );
};

export default NotificationsCard;
