import React from 'react';

// import { Container } from './styles';

import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GenericContentloader from '../ContentLoader/Warning';

const NotificationsCard: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      <div className="card border-dark mb-3 center">
        <div className="card-header">
          <h3>
            <b>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              &nbsp; NOTIFICAÇÕES DO SISTEMA
            </b>
          </h3>
        </div>

        <div className="card-body">
          {loading ? <GenericContentloader /> : <h1>teste</h1>}
        </div>
      </div>
    </>
  );
};

export default NotificationsCard;
