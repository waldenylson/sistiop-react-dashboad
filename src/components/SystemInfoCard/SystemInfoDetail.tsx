import React from 'react';

import { IInfSistemas } from '.';
interface ISystemInfoDatail {
  index: number;
  isFetching: boolean;
  infSis: IInfSistemas[] | [] | undefined;
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCode,
  faInfoCircle,
  faCalendar,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

import { Audio } from 'react-loader-spinner';

import { format } from 'date-fns';

const SystemInfoDetail: React.FC<ISystemInfoDatail> = ({
  index,
  isFetching,
  infSis,
}) => {
  return (
    <>
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
              <i> {infSis?.length ? infSis[index].sistema : ''}</i>
            </b>
          </i>
          <br />
          <FontAwesomeIcon icon={faInfoCircle} />
          <i>
            &nbsp;&nbsp;VER:&nbsp;
            <b>
              <span className="less-font">
                {infSis?.length ? infSis[index].versao : ''}
              </span>
            </b>
          </i>
          <br />
          <FontAwesomeIcon icon={faCalendar} />
          <i>
            &nbsp;&nbsp;ATL:&nbsp;
            <b>
              {infSis?.length
                ? format(new Date(infSis[index].dt_sistema), 'dd/MM/yyyy')
                : ''}
            </b>
          </i>
          <br />
          <FontAwesomeIcon icon={faDatabase} />
          <i>
            &nbsp;&nbsp;BDS:&nbsp;
            <b>{infSis?.length ? infSis[index].v_bds : ''}</b>
          </i>
          <br />
          <FontAwesomeIcon icon={faCalendar} />
          <i>
            &nbsp;&nbsp;ATL:&nbsp;
            <b>
              {infSis?.length
                ? format(new Date(infSis[index].dt_bds), 'dd/MM/yyyy')
                : ''}
            </b>
          </i>
        </div>
      )}
    </>
  );
};

export default SystemInfoDetail;
