import React from 'react';

import {
  faPlaneDeparture,
  faCheckCircle,
  faCalendar,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { format } from 'date-fns';

import api from '../../services/api.service';

import { Container } from './styles';

const RPLCard: React.FC = () => {
  return (
    <Container>
      <div className="card border-dark mb-3 center" style={{ marginTop: -7 }}>
        <div className="card-header" style={{ height: 60, fontSize: 30 }}>
          <FontAwesomeIcon icon={faPlaneDeparture} />
          <b>&nbsp; RPL</b>
        </div>
        <div className="card-body box-rpl">
          <div>
            <FontAwesomeIcon icon={faCheckCircle} />
            <i>&nbsp;ATUAL:</i>
            <b> RPL200&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
          </div>

          <div>
            <FontAwesomeIcon icon={faCalendar} />
            <i>&nbsp;ATLIZ:</i>
            <b> 00/00/0000</b>
          </div>
          <div>
            <FontAwesomeIcon icon={faExclamationCircle} />
            <i>&nbsp;VALID:</i>
            <b> 00/00/0000</b>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RPLCard;
