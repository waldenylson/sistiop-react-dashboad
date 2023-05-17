import React from 'react';

import { Container } from './styles';

import {
  faCheckCircle,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useRecoilValue } from 'recoil';
import { RPLValidateInfo, RPLCGNAInfo } from '../RPLCard/recoil.atom';

const NotificationsCard: React.FC = () => {
  const rplAlert = useRecoilValue(RPLValidateInfo);
  const cgnaRPL = useRecoilValue(RPLCGNAInfo);

  console.log(cgnaRPL);

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
        {cgnaRPL === 1 ? (
          <div className="box box-notification-rplCGNA box-notification-height">
            <span className="fa-blink">
              RPL DISPONÍVEL no Portal do CGNA! <br /> Iniciar Tratamento no
              SAGITARIO!
            </span>
          </div>
        ) : cgnaRPL === 2 ? (
          <div className="box box-notification-C-AIS box-notification-height">
            <span>
              RPL Futuro Iniciado no SAGITARIO! <br /> Aguardando correção do
              C-AIS!
            </span>
          </div>
        ) : cgnaRPL === 3 && !rplAlert ? (
          <div className="box box-notification-agendado box-notification-height">
            <span>
              RPL Futuro Agendado no SAGITARIO! <br />
            </span>
          </div>
        ) : rplAlert ? (
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
