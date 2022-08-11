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
    <>
      <div className="card border-dark mb-3 center">
        <div className="card-header">
          <h3>
            <b>
              <FontAwesomeIcon icon={faPlaneDeparture} />
              &nbsp; RPL
            </b>
          </h3>
        </div>

        <Container className="box-rpl">
          <FontAwesomeIcon icon={faCheckCircle} />
          <i>
            &nbsp;ATUAL:
            <b>
              <i>RPL200</i>
            </b>
          </i>
          <br />
          <FontAwesomeIcon icon={faCalendar} />
          <i>
            &nbsp;ATLIZ:
            <b> 00/00/0000</b>
          </i>
          <br />
          <FontAwesomeIcon icon={faExclamationCircle} />
          <i>
            &nbsp;VALID:
            <b>00/00/0000</b>
          </i>
        </Container>
      </div>
    </>
  );
};

export default RPLCard;
