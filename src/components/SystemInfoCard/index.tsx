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

  React.useEffect(() => {
    api.get('/api/getInfSis').then(response => {
      setInfSis(response.data);
    });
  }, []);

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
                &nbsp;&nbsp;VER:
                <b>
                  <span className="less-font">
                    {infSis?.length ? infSis[0].versao : ''}
                  </span>
                </b>
              </i>
              <br />
              <FontAwesomeIcon icon={faCalendar} />
              <i>
                &nbsp;&nbsp;ATL:
                <b>
                  {infSis?.length
                    ? format(new Date(infSis[0].dt_sistema), 'dd/MM/yyyy')
                    : ''}
                </b>
              </i>
              <br />
              <FontAwesomeIcon icon={faDatabase} />
              <i>
                &nbsp;&nbsp;BDS:
                <b>{infSis?.length ? infSis[0].v_bds : ''}</b>
              </i>
              <br />
              <FontAwesomeIcon icon={faCalendar} />
              <i>
                &nbsp;&nbsp;ATL:
                <b>
                  {infSis?.length
                    ? format(new Date(infSis[0].dt_bds), 'dd/MM/yyyy')
                    : ''}
                </b>
              </i>
            </div>
            <span className="badge bg-dark span-badge-name-titles">ACC-AO</span>
            <div className="box box-bg-color">
              <FontAwesomeIcon icon={faCode} />
              <i>
                &nbsp;STM:
                <b>
                  <i>{infSis?.length ? infSis[1].sistema : ''}</i>
                </b>
              </i>
              <br />
              <FontAwesomeIcon icon={faInfoCircle} />
              <i>
                &nbsp;&nbsp;VER:
                <b>{infSis?.length ? infSis[1].versao : ''}</b>
              </i>
              <br />
              <FontAwesomeIcon icon={faCalendar} />
              <i>
                &nbsp;&nbsp;ATL:
                <b>
                  {infSis?.length
                    ? format(new Date(infSis[1].dt_sistema), 'dd/MM/yyyy')
                    : ''}
                </b>
              </i>
              <br />
              <FontAwesomeIcon icon={faDatabase} />
              <i>
                &nbsp;&nbsp;BDS:
                <b>{infSis?.length ? infSis[1].v_bds : ''}</b>
              </i>
              <br />
              <FontAwesomeIcon icon={faCalendar} />
              <i>
                &nbsp;&nbsp;ATL:
                <b>
                  {infSis?.length
                    ? format(new Date(infSis[1].dt_bds), 'dd/MM/yyyy')
                    : ''}
                </b>
              </i>
            </div>
            <span className="badge bg-dark span-badge-name-titles">APP-RF</span>
            <div className="box box-bg-color">
              <FontAwesomeIcon icon={faCode} />
              <i>
                &nbsp;STM:
                <b>
                  <i>{infSis?.length ? infSis[2].sistema : ''}</i>
                </b>
              </i>
              <br />
              <FontAwesomeIcon icon={faInfoCircle} />
              <i>
                &nbsp;&nbsp;VER:
                <b>{infSis?.length ? infSis[2].versao : ''}</b>
              </i>
              <br />
              <FontAwesomeIcon icon={faCalendar} />
              <i>
                &nbsp;&nbsp;ATL:{' '}
                <b>
                  {infSis?.length
                    ? format(new Date(infSis[2].dt_sistema), 'dd/MM/yyyy')
                    : ''}
                </b>
              </i>
              <br />
              <FontAwesomeIcon icon={faDatabase} />
              <i>
                &nbsp;&nbsp;BDS:
                <b>{infSis?.length ? infSis[2].v_bds : ''}</b>
              </i>
              <br />
              <FontAwesomeIcon icon={faCalendar} />
              <i>
                &nbsp;&nbsp;ATL:
                <b>
                  {infSis?.length
                    ? format(new Date(infSis[2].dt_bds), 'dd/MM/yyyy')
                    : ''}
                </b>
              </i>
            </div>
            <span className="badge bg-dark span-badge-name-titles">COPM3</span>
            <div className="box box-bg-color">
              <FontAwesomeIcon icon={faCode} />
              <i>
                &nbsp;STM:
                <b>
                  <i>{infSis?.length ? infSis[3].sistema : ''}</i>
                </b>
              </i>
              <br />
              <FontAwesomeIcon icon={faInfoCircle} />
              <i>
                &nbsp;&nbsp;VER:
                <b>{infSis?.length ? infSis[3].versao : ''}</b>
              </i>
              <br />
              <FontAwesomeIcon icon={faCalendar} />
              <i>
                &nbsp;&nbsp;ATL:
                <b>
                  {infSis?.length
                    ? format(new Date(infSis[3].dt_sistema), 'dd/MM/yyyy')
                    : ''}
                </b>
              </i>
              <br />
              <FontAwesomeIcon icon={faDatabase} />
              <i>
                &nbsp;&nbsp;BDS:
                <b>{infSis?.length ? infSis[3].v_bds : ''}</b>
              </i>
              <br />
              <FontAwesomeIcon icon={faCalendar} />
              <i>
                &nbsp;&nbsp;ATL:
                <b>
                  {infSis?.length
                    ? format(new Date(infSis[3].dt_bds), 'dd/MM/yyyy')
                    : ''}
                </b>
              </i>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default SystemInfoCard;
