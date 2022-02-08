import React from 'react';

import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { parse } from 'date-fns';

import api from '../../services/api.service';

import GenericContentLoader from '../ContentLoader';

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
  const [sobreaviso, setSobreaviso] = React.useState<ISobreaviso[]>();
  const [loading, setLoading] = React.useState(true);
  const [loadingController, setLoadingController] = React.useState(true);

  const escalas = [
    'SOBREAVISO DA TIAD',
    'SOBREAVISO DA TIOP',
    'SOBREAVISO DA TISI',
    'SOBREAVISO DE REDES (TTIR)',
    'SOBREAVISO TÉCNICO AO RADAR',
    // "TÉCNICO DE DIA À KM",
    // "TÉCNICO DE DIA À SALA TÉCNICA DIURNO",
    // "TÉCNICO DE DIA À SALA TÉCNICA NOTURNO",
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      // setLoadingController(false);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    api.get('/api/getSobreaviso').then(response => {
      const responseData: ISobreaviso[] = response.data;

      const filteredData = responseData?.filter(item =>
        escalas.includes(item.nome),
      );

      filteredData.splice(0, 0, filteredData[1]);
      filteredData.splice(2, 1);

      setSobreaviso(filteredData);
    });

    console.log('aasdasd');
  }, []);

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
  function parseAgenda(agenda: any) {
    if (!agenda) {
      return 'N/C';
    }

    return agenda;
  }

  return (
    <>
      <div className="card border-dark mb-3 center">
        <div className="card-header">
          <h3>
            <b>
              <FontAwesomeIcon icon={faBell} />
              &nbsp; SOBREAVISO TÉCNICO
            </b>
          </h3>
        </div>

        <div className="card-body">
          {loading ? (
            <GenericContentLoader />
          ) : (
            sobreaviso?.map((item, index) => (
              <p className="card-text-content" style={{ fontSize: 25 }}>
                {sobreavisoTiop(new Date().getHours()) && index === 0
                  ? `${item.dadosEscalaResources[0].escalado.slice(
                      0,
                      -15,
                    )} (${parseAgenda(item.dadosEscalaResources[0].ramal)})`
                  : `${item.dadosEscalaResources[1].escalado.slice(
                      0,
                      -15,
                    )} (${parseAgenda(item.dadosEscalaResources[1].ramal)})`}
              </p>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default WarningCard;
