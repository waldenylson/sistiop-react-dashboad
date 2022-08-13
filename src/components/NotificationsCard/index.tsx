import React from 'react';

// import { Container } from './styles';

import {
  faCheckCircle,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NotificationsCard: React.FC = () => {
  return (
    <div className="card border-dark mb-3 center">
      <div className="card-header" style={{ height: 60, fontSize: 27 }}>
        <b>
          <FontAwesomeIcon icon={faExclamationTriangle} />
          &nbsp; NOTIFICAÇÕES DO SISTEMA
        </b>
      </div>

      <div
        className="card-body"
        style={{
          height: 300,
        }}
      >
        <FontAwesomeIcon icon={faCheckCircle} size="10x" />
        <p
          style={{
            fontFamily: 'verdana',
            fontWeight: 'bold',
            fontStyle: 'italic',
            marginTop: 10,
          }}
        >
          Sem novos eventos!
        </p>
      </div>
    </div>
  );
};

export default NotificationsCard;
