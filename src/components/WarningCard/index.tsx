import React from 'react';

import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import api from '../../services/api.service';

import GenericContentLoader from '../ContentLoader/Warning';
import { useQuery } from '@tanstack/react-query';

interface IDadosEscalaResources {
  escalado: string;
  ramal: string;
}

interface ISobreaviso {
  nome: string;
  chatId: string;
  om: string;
  dadosEscalaResources: Array<IDadosEscalaResources>;
}

const WarningCard: React.FC = () => {
  const [sobreaviso, setSobreaviso] = React.useState<ISobreaviso[] | null>();

  const escalas = [
    // 'OFICIAL DE SOBREAVISO TÉCNICO',
    'SOBREAVISO DA TIAD',
    'SOBREAVISO DA TIOP',
    'SOBREAVISO DA TISI',
    'SOBREAVISO DE REDES (TTIR)',
    'SOBREAVISO TÉCNICO AO RADAR',
    // 'SOBREAVISO DA TIMC',
    // "TÉCNICO DE DIA À KM",
    // "TÉCNICO DE DIA À SALA TÉCNICA DIURNO",
    // "TÉCNICO DE DIA À SALA TÉCNICA NOTURNO",
  ];

  const { isFetching } = useQuery(
    ['sobreavisos'],
    async () => {
      await api.get('/api/getSobreaviso').then(response => {
        const responseData: ISobreaviso[] = response.data;

        const filteredData = responseData?.filter(item =>
          item.dadosEscalaResources.length === 0
            ? ''
            : escalas.includes(item.nome),
        );

        filteredData.splice(0, 0, filteredData[1]);
        filteredData.splice(2, 1);

        setSobreaviso(filteredData);
      });
    },
    {
      refetchInterval: 60000 * 5, //5 minutos
    },
  );

  /**
   * Verifica o sobreaviso da TIOp, visto que a virada ocorre somente
   * a partir das 08:00h
   *
   * @param hora Hora servidor
   * @returns boolean baseado na hora quando entre 00:00h and 07:59h
   */
  function sobreavisoTiop(hora: number): boolean {
    if (hora >= 0 && hora < 8) {
      return true;
    }

    return false;
  }

  /**
   * Verifica o cadastro da agenda no campo ramal do SQUAMIS
   *
   * @param agenda Numero agenda SQUAMIS
   * @returns Agenda ou Não Cadastrado (N/C)
   */
  function parseAgenda(agenda: string) {
    if (!agenda) {
      return 'N/C';
    }

    return agenda;
  }

  return (
    <div className="card border-dark mb-3 center">
      <div className="card-header" style={{ height: 60, fontSize: 30 }}>
        <b>
          <FontAwesomeIcon icon={faBell} />
          &nbsp; SOBREAVISO TÉCNICO
        </b>
      </div>

      <div className="card-body" style={{ height: 350 }}>
        {isFetching && !sobreaviso ? (
          <GenericContentLoader />
        ) : (
          sobreaviso?.map((item, index) => (
            <p
              className="card-text-content"
              style={{ fontSize: 25 }}
              key={item.nome}
            >
              {sobreavisoTiop(new Date().getHours()) && index === 0
                ? `${item.dadosEscalaResources[0].escalado.slice(
                    0,
                    -15,
                  )} (${parseAgenda(item.dadosEscalaResources[0].ramal)})`
                : item.dadosEscalaResources[1]
                ? `${item.dadosEscalaResources[1].escalado.slice(
                    0,
                    -15,
                  )} (${parseAgenda(item.dadosEscalaResources[1].ramal)})`
                : item.nome + ' S/ Escala'}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default WarningCard;
