import React from 'react';

import { IMNTdata } from '../index';

import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from './styles';

interface IMaintenanceCard {
  data: IMNTdata;
}

const MaintenanceCard: React.FC<IMaintenanceCard> = ({ data }) => {
  return (
    <Container>
      <div
        style={{
          margin: 2,
        }}
      >
        <div className="card border-dark mb-3" style={{ height: 215 }}>
          <div className="card-header" style={{ height: 60, fontSize: 30 }}>
            <b>{data.radarNome}</b>
          </div>
          <div className="card-body data">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span className="card-title">
              <a>
                <b>&nbsp;{data.data_ini}&nbsp;&nbsp;</b>
              </a>
            </span>
            <FontAwesomeIcon icon={faClock} />
            <span className="card-title data">
              <a>
                <b>&nbsp;{data.hora_ini + 'Z'}</b>
              </a>
            </span>
            <br />
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span className="card-title">
              <a>
                <b>&nbsp;{data.data_fim}&nbsp;&nbsp;</b>
              </a>
            </span>
            <FontAwesomeIcon icon={faClock} />
            <span className="card-title data">
              <a>
                <b>&nbsp;{data.hora_fim + 'Z'}</b>
              </a>
            </span>
            <hr style={{ margin: 6 }} />
            <i>
              <p className="card-text teste">{data.motivo}</p>
            </i>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MaintenanceCard;
