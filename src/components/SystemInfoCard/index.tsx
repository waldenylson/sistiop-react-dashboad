import React from 'react';

import {
  faDesktop,
  faCode,
  faInfoCircle,
  faCalendar,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

import { format } from 'date-fns';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import api from '../../services/api.service';
import { useQuery } from '@tanstack/react-query';

import { Audio } from 'react-loader-spinner';

interface IInfSistemas {
  sistema: string;
  versao: string;
  dt_sistema: Date | string;
  centro: string;
  v_bds: string;
  dt_bds: Date | string;
}

const SystemInfoCard: React.FC = () => {
  const [infSis, setInfSis] = React.useState<IInfSistemas[] | []>();

  const { isFetching } = useQuery(
    ['InfSis'],
    async () => {
      await api.get('/api/getInfSis').then(response => {
        setInfSis(response.data);
      });
    },
    {
      refetchInterval: 60000 * 5, //5 minutos
    },
  );

  return (
    <>
      <div className="teste card border-dark mb-3">
        <div
          className="card-header center"
          style={{ height: 60, fontSize: 30 }}
        >
          <b>
            <FontAwesomeIcon icon={faDesktop} />
            &nbsp; SISTEMAS
          </b>
        </div>
        <div className="card-body" style={{ fontSize: 15 }}>
          <p>
            <span className="badge bg-dark span-badge-name-titles">ACC-RE</span>
            {isFetching && !infSis ? (
              <div
                style={{
                  paddingLeft: '30%',
                }}
              >
                <Audio
                  height="100"
                  width="100"
                  color="#fff"
                  ariaLabel="audio-loading"
                  visible={true}
                />
              </div>
            ) : (
              <div className="box box-bg-color">
                <FontAwesomeIcon icon={faCode} />
                <i>
                  &nbsp;STM:
                  <b>
                    <i> {infSis?.length ? infSis[0].sistema : ''}</i>
                  </b>
                </i>
                <br />
                <FontAwesomeIcon icon={faInfoCircle} />
                <i>
                  &nbsp;&nbsp;VER:&nbsp;
                  <b>
                    <span className="less-font">
                      {infSis?.length ? infSis[0].versao : ''}
                    </span>
                  </b>
                </i>
                <br />
                <FontAwesomeIcon icon={faCalendar} />
                <i>
                  &nbsp;&nbsp;ATL:&nbsp;
                  <b>
                    {infSis?.length
                      ? format(new Date(infSis[0].dt_sistema), 'dd/MM/yyyy')
                      : ''}
                  </b>
                </i>
                <br />
                <FontAwesomeIcon icon={faDatabase} />
                <i>
                  &nbsp;&nbsp;BDS:&nbsp;
                  <b>{infSis?.length ? infSis[0].v_bds : ''}</b>
                </i>
                <br />
                <FontAwesomeIcon icon={faCalendar} />
                <i>
                  &nbsp;&nbsp;ATL:&nbsp;
                  <b>
                    {infSis?.length
                      ? format(new Date(infSis[0].dt_bds), 'dd/MM/yyyy')
                      : ''}
                  </b>
                </i>
              </div>
            )}

            <span className="badge bg-dark span-badge-name-titles">ACC-AO</span>
            {isFetching && !infSis ? (
              <div
                style={{
                  paddingLeft: '30%',
                }}
              >
                <Audio
                  height="100"
                  width="100"
                  color="#fff"
                  ariaLabel="audio-loading"
                  visible={true}
                />
              </div>
            ) : (
              <div className="box box-bg-color">
                <FontAwesomeIcon icon={faCode} />
                <i>
                  &nbsp;STM:
                  <b>
                    <i> {infSis?.length ? infSis[3].sistema : ''}</i>
                  </b>
                </i>
                <br />
                <FontAwesomeIcon icon={faInfoCircle} />
                <i>
                  &nbsp;&nbsp;VER:&nbsp;
                  <b>
                    <span className="less-font">
                      {infSis?.length ? infSis[3].versao : ''}
                    </span>
                  </b>
                </i>
                <br />
                <FontAwesomeIcon icon={faCalendar} />
                <i>
                  &nbsp;&nbsp;ATL:&nbsp;
                  <b>
                    {infSis?.length
                      ? format(new Date(infSis[3].dt_sistema), 'dd/MM/yyyy')
                      : ''}
                  </b>
                </i>
                <br />
                <FontAwesomeIcon icon={faDatabase} />
                <i>
                  &nbsp;&nbsp;BDS:&nbsp;
                  <b>{infSis?.length ? infSis[3].v_bds : ''}</b>
                </i>
                <br />
                <FontAwesomeIcon icon={faCalendar} />
                <i>
                  &nbsp;&nbsp;ATL:&nbsp;
                  <b>
                    {infSis?.length
                      ? format(new Date(infSis[3].dt_bds), 'dd/MM/yyyy')
                      : ''}
                  </b>
                </i>
              </div>
            )}
            <span className="badge bg-dark span-badge-name-titles">APP-RF</span>
            {isFetching && !infSis ? (
              <div
                style={{
                  paddingLeft: '30%',
                }}
              >
                <Audio
                  height="100"
                  width="100"
                  color="#fff"
                  ariaLabel="audio-loading"
                  visible={true}
                />
              </div>
            ) : (
              <div className="box box-bg-color">
                <FontAwesomeIcon icon={faCode} />
                <i>
                  &nbsp;STM:
                  <b>
                    <i> {infSis?.length ? infSis[1].sistema : ''}</i>
                  </b>
                </i>
                <br />
                <FontAwesomeIcon icon={faInfoCircle} />
                <i>
                  &nbsp;&nbsp;VER:&nbsp;
                  <b>
                    <span className="less-font">
                      {infSis?.length ? infSis[1].versao : ''}
                    </span>
                  </b>
                </i>
                <br />
                <FontAwesomeIcon icon={faCalendar} />
                <i>
                  &nbsp;&nbsp;ATL:&nbsp;
                  <b>
                    {infSis?.length
                      ? format(new Date(infSis[1].dt_sistema), 'dd/MM/yyyy')
                      : ''}
                  </b>
                </i>
                <br />
                <FontAwesomeIcon icon={faDatabase} />
                <i>
                  &nbsp;&nbsp;BDS:&nbsp;
                  <b>{infSis?.length ? infSis[1].v_bds : ''}</b>
                </i>
                <br />
                <FontAwesomeIcon icon={faCalendar} />
                <i>
                  &nbsp;&nbsp;ATL:&nbsp;
                  <b>
                    {infSis?.length
                      ? format(new Date(infSis[1].dt_bds), 'dd/MM/yyyy')
                      : ''}
                  </b>
                </i>
              </div>
            )}
            <span className="badge bg-dark span-badge-name-titles">COPM3</span>
            {isFetching && !infSis ? (
              <div
                style={{
                  paddingLeft: '30%',
                }}
              >
                <Audio
                  height="100"
                  width="100"
                  color="#fff"
                  ariaLabel="audio-loading"
                  visible={true}
                />
              </div>
            ) : (
              <div className="box box-bg-color">
                <FontAwesomeIcon icon={faCode} />
                <i>
                  &nbsp;STM:
                  <b>
                    <i> {infSis?.length ? infSis[2].sistema : ''}</i>
                  </b>
                </i>
                <br />
                <FontAwesomeIcon icon={faInfoCircle} />
                <i>
                  &nbsp;&nbsp;VER:&nbsp;
                  <b>
                    <span className="less-font">
                      {infSis?.length ? infSis[2].versao : ''}
                    </span>
                  </b>
                </i>
                <br />
                <FontAwesomeIcon icon={faCalendar} />
                <i>
                  &nbsp;&nbsp;ATL:&nbsp;
                  <b>
                    {infSis?.length
                      ? format(new Date(infSis[2].dt_sistema), 'dd/MM/yyyy')
                      : ''}
                  </b>
                </i>
                <br />
                <FontAwesomeIcon icon={faDatabase} />
                <i>
                  &nbsp;&nbsp;BDS:&nbsp;
                  <b>{infSis?.length ? infSis[2].v_bds : ''}</b>
                </i>
                <br />
                <FontAwesomeIcon icon={faCalendar} />
                <i>
                  &nbsp;&nbsp;ATL:&nbsp;
                  <b>
                    {infSis?.length
                      ? format(new Date(infSis[2].dt_bds), 'dd/MM/yyyy')
                      : ''}
                  </b>
                </i>
              </div>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default SystemInfoCard;
