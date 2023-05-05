import React from 'react';

import {
  faPlaneDeparture,
  faCheckCircle,
  faCalendar,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import api from '../../services/api.service';

import { Container } from './styles';
import { useQuery } from '@tanstack/react-query';

import { useRecoilState } from 'recoil';
import { RPLValidateInfo, RPLCGNAInfo } from '../RPLCard/recoil.atom';

import { Radio } from 'react-loader-spinner';

interface IRPLInfo {
  numero: string;
  validade: string;
  dtCarga: string;
  cgna_rpl: number;
}

const RPLCard: React.FC = () => {
  const [rplInfo, setRplInfo] = React.useState<IRPLInfo | null>();
  const [rplAlert, setRplAlert] = useRecoilState(RPLValidateInfo);
  const [rplCGNA, setRplCGNA] = useRecoilState(RPLCGNAInfo);

  const { isFetching } = useQuery(
    ['RPLInfo'],
    async () => {
      await api
        .get('/api/getRPLInfo')
        .then(response => {
          setRplInfo(response.data[0]);
          setRplCGNA(response.data[0].cgna_rpl);
          setRplAlert(response.data[1].rplAlert);
        })
        .then(() => {});
    },
    {
      refetchInterval: 60000 * 5, //5 minutos
    },
  );

  return (
    <Container>
      <div className="card border-dark mb-3 center" style={{ marginTop: -13 }}>
        <div
          className={
            'card-header ' +
            (rplAlert
              ? 'box-rpl-titulo-color-red'
              : rplCGNA === 1
              ? 'box-rpl-titulo-color-yellow'
              : rplCGNA === 2
              ? 'box-rpl-titulo-color-orange'
              : rplCGNA === 3
              ? 'box-rpl-titulo-color-lemon'
              : '')
          }
          style={{ height: 60, fontSize: 30 }}
        >
          <FontAwesomeIcon icon={faPlaneDeparture} />
          <b>&nbsp; RPL</b>
        </div>
        <div className="card-body box-rpl">
          {isFetching && !rplInfo ? (
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
              <div>
                <FontAwesomeIcon icon={faCheckCircle} />
                <i>&nbsp;ATUAL:</i>
                <b> {rplInfo?.numero}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
              </div>

              <div>
                <FontAwesomeIcon icon={faCalendar} />
                <i>&nbsp;ATLIZ:</i>
                <b> {rplInfo?.dtCarga}</b>
              </div>
              <div>
                <FontAwesomeIcon icon={faExclamationCircle} />
                <i>&nbsp;VALID:</i>
                <b> {rplInfo?.validade}</b>
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default RPLCard;
